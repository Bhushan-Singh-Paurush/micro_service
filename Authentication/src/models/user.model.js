import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      select: false,
    },
    phone: {
      type: String,
      trim: true,
    },
    logo: {
      type: String,
      trim: true,
    },
    refreshToken: {
      type: String,
      trim: true,
    },
    role: {
      type: String,
      enum: ["client", "admin"],
      default: "client",
    },
    isLoginPersist: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods = {
  comparePassword: async function (password) {
    return await bcrypt.compare(password, this.password);
  },
};

export const User = mongoose.model("User", userSchema);
