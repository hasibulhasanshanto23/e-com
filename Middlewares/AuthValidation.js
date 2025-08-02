const Joi = require("joi");

const signupValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(100).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    const errors = error.details.map((detail) =>
      detail.message.replace(/['"]/g, "")
    );
    return res.status(400).json({
      message: "Validation error",
      errors,
    });
  }

  next();
};

const loginValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(100).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    const errors = error.details.map((detail) =>
      detail.message.replace(/['"]/g, "")
    );
    return res.status(400).json({
      message: "Validation error",
      errors,
    });
  }
  next();
};

module.exports = {
  signupValidation,
  loginValidation,
};
