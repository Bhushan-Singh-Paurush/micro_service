import { getModuleService } from "../services/module.service.js";
import { getSubModuleByModuleIdService } from "../services/subModule.service.js";
import { createUserService } from "../services/user.service.js";
import { createUserModuleService } from "../services/userModule.service.js";

async function createUser() {
  try {
    const admin = await createUserService({
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
      name: process.env.ADMIN_NAME,
      role: "admin",
    });

    if (!admin) {
      throw new Error("Admin not created ❎");
    }

    const module = await getModuleService({ name: "admin" });

    if (!module) {
      throw new Error("No module found named admin ❎");
    }

    const subModules = await getSubModuleByModuleIdService({ id: module._id });

    const data = subModules.map((ele) => ({
      userId: admin._id.toString(),
      subModuleId: ele._id.toString(),
      read: true,
      write: true,
    }));

    await createUserModuleService(data);

    
  } catch (error) {
    throw error;
  }
}

export default createUser;
