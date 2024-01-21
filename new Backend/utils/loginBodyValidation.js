import joi from "joi";
const isValid = (req_body) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
    notes: joi.array(),
  });
  return schema.validate(req_body);
};

export default isValid;
