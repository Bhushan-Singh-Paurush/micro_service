import { User } from "../models/user.model.js";
import { UserModule } from "../models/userModule.model.js";
import { emailQueue } from "../queues.js";
import { redis } from "../redis.js";

import {
  findUserByEmailRepo,
  findUserByIdRepo,
} from "../repositories/user.repository.js";
import { getUserModulesRepo } from "../repositories/userModule.repository.js";
import apiError from "../utils/apiError.js";
import { jwtVerify, SignJWT } from "jose";
import { getUserModuleService } from "./userModule.service.js";

async function generateToken(UserData) {

 
  const refrestSecret = new TextEncoder().encode(
    process.env.REFRESH_TOKEN_SECRET
  );

  const accessSecret = new TextEncoder().encode(
    process.env.ACCESS_TOKEN_SECRET
  );

  const refreshToken = await new SignJWT({ _id: UserData._id.toString() })
    .setIssuedAt()
    .setExpirationTime(process.env.REFRESH_TOKEN_EXPIRE)
    .setProtectedHeader({ alg: "HS256" })
    .sign(refrestSecret);

  const accessToken = await new SignJWT({
    _id: UserData._id.toString(),
    role: UserData.role,
    modulesDetails: UserData.modulesDetails,
  })
    .setIssuedAt()
    .setExpirationTime(process.env.ACCESS_TOKEN_EXPIRE)
    .setProtectedHeader({ alg: "HS256" })
    .sign(accessSecret);

  return { refreshToken, accessToken };
}

function generateOTP() {
  return Math.floor(100000 + 900000 * Math.random());
}

export const loginService = async (data) => {
  const checkOTP = await redis.get(`otp:${data.email}`);

  if (!checkOTP) {
    throw new apiError(400, "OTP expired");
  }

  if (checkOTP !== data.otp) {
    throw new apiError(400, "wrong OTP");
  }

  await redis.del(`otp:${data.email}`);

  const user = await findUserByEmailRepo(data.email);

  if (!user) {
    throw new apiError(404, "User not found");
  }

  const isPasswordCorrect = await user.comparePassword(data.password);

  if (!isPasswordCorrect) {
    throw new apiError(400, "Wrong Password");
  }

  let UserData;

  const exists = await redis.exists(`UserData:${data.email}`);

  if (exists) {
    UserData = await redis.hgetall(`UserData:${data.email}`);
    UserData.modulesDetails = JSON.parse(UserData.modulesDetails);
  } else {
    const modulesDetails = await getUserModuleService(user._id);
  
    
    UserData={
         name: user.name,
        email: user.email,
        _id: user._id.toString(),
        role: user.role,
        modulesDetails,
    }

    await redis.hset(`UserData:${data.email}`,{...UserData,modulesDetails:JSON.stringify(modulesDetails)});
  }

  console.log("this is UserData",UserData)

  const { refreshToken, accessToken } = await generateToken(UserData);

  user.refreshToken = refreshToken;
  user.isLoginPersist = data.isPersist;
  await user.save();

  user.password = undefined;
  user.refreshToken = undefined;

  return {
    UserData,
    refreshToken,
    accessToken,
  };
};

export const refreshTokenService = async (data) => {
  const refreshSecret = new TextEncoder().encode(
    process.env.REFRESH_TOKEN_SECRET
  );

  const { payload } = await jwtVerify(data.refreshToken, refreshSecret);

  const user = await findUserByIdRepo(payload?._id);

  if (!user) {
    throw new apiError(404, "user not found");
  }

  if (user.refreshToken !== data.refreshToken) {
    throw new apiError(403, "expire or used token");
  }

  let UserData;

  const exists = await redis.exists(`UserData:${user.email}`);

  if (exists) {
    UserData = await redis.hgetall(`UserData:${user.email}`);
    UserData.modulesDetails = JSON.parse(UserData.modulesDetails);
  } else {
    const modulesDetails = await getUserModuleService(user._id);

    await redis.hset(`UserData:${user.email}`, {
      name: user.name,
      email: user.email,
      _id: user._id,
      role: user.role,
      modulesDetails: JSON.stringify(modulesDetails),
    });
  }

  const { refreshToken, accessToken } = await generateToken(UserData);

  user.refreshToken = refreshToken;

  await user.save();

  return {
    refreshToken,
    accessToken,
    isPersist: user.isLoginPersist,
    UserData,
  };
};

export const sendOTPService = async (data) => {
  const otp = generateOTP();

  await redis.set(`otp:${data.email}`, otp, "EX", 300);

  await emailQueue.add(
    "send-otp",
    {
      subject: data.subject,
      email: data.email,
      body: data.template(otp, "5 min"),
    },
    {
      attempts: 3,
      backoff: {
        type: "exponential",
        delay: 5000,
      },
    }
  );
  return;
};

export const forgotPasswordService = async (data) => {
  const user = await findUserByEmailRepo(data.email);

  if (!user) {
    throw new apiError(400, "This Email is not registered");
  }

  const secret = new TextEncoder().encode(
    process.env.FORGOT_PASSWORD_TOKEN_SECRET
  );

  const token = await new SignJWT({ _id: user._id.toString() })
    .setIssuedAt()
    .setExpirationTime(process.env.FORGOT_PASSWORD_TOKEN_EXPIRE)
    .setProtectedHeader({ alg: "HS256" })
    .sign(secret);

  const link = `${process.env.ORIGIN}/auth/forgot-password/${token}`;

  console.log(link);

  await emailQueue.add(
    "send-forgot-password-link",
    {
      subject: data.subject,
      email: data.email,
      body: data.template(link),
    },
    {
      attempts: 3,
      backoff: {
        type: "exponential",
        delay: 5000,
      },
    }
  );
};

export const resetPasswordService = async (data) => {
  const secret = new TextEncoder().encode(
    process.env.FORGOT_PASSWORD_TOKEN_SECRET
  );

  const { payload } = await jwtVerify(data.token, secret);

  const user = await findUserByIdRepo(payload._id);

  if (!user) {
    throw new apiError(404, "User not found");
  }

  user.password = data.password;

  await user.save();

  return;
};
