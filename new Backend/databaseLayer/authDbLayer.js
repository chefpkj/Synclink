import Users from "../models/users.js";
import bcrypt from "bcryptjs";
import jwtControls from "../middleware/jwtControls.js";
const login = async (req_body) => {
  const user = await Users.findOne({ email: req_body.email });
  let result;
  if (!user) {
    return (result = {
      status: 400,
      message: "Invalid Email or password",
    });
  }
  const varifypass = await bcrypt.compare(req_body.password, user.password);
  if (!varifypass) {
    return (result = {
      status: 400,
      message: "Invalid email or Password",
    });
  }
  const token = await jwtControls.createToken(user?._id);
  return (result = {
    status: 200,
    message: token,
  });
};
const authDbLayer = {
  login,
};

export default authDbLayer;
