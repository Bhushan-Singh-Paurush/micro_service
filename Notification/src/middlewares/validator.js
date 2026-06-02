import asyncHandler from "../utils/asyncHandler.js";
import apiError from "../utils/apiError.js";

const validator = (schema) =>
  asyncHandler(async (req, res, next) => {
    try {
      await schema.parseAsync({
        body: req.body,
        params: req.params,
        query: req.query,
        cookies: req.cookies,
        user:req.user
      });

      next();
    } catch (error) {
      const errors = error.issues?.map((err) => ({
        field: err.path.join("."),
        message: err.message.includes("undefined")
          ? `${err.path.join(".")} is required`
          : err.message,
      }));

      throw new apiError(400, "Validation error", errors);
    }
  });

export default validator;
