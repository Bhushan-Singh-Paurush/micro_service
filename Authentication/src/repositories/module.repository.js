import { Module } from "../models/module.model.js";

export const createModuleRepo = async (data) => {
  await Module.create(data);
};


export const getModulRepo=async(name)=>{
  return await Module.findOne({name})
}