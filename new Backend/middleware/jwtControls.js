import jwt, { decode } from "jsonwebtoken";
import { auth } from "../config/config.js";
import Users from "../models/users.js";
const createToken = async (id) => {
  let payload = { id: id };
  let token = jwt.sign(payload, auth?.secret);
  return token;
};
const authorizeToken = async (req, res, next) => {
  let token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).send("Please enter authorization token in header.");
  }
  jwt.verify(token, auth?.secret, async (error, decoded) => {
    if (error) {
      return res.status(401).send("Invalid access token.");
    } else {
      //checking if user has authorize access
      const user = await Users.findById(decoded?.id);
      
      if (!user) {
        return res.status(401).send(`User doesn't exist.`);
      }
      //if everything is fine
      req.body.id = decoded?.id;
      next();
    }
  });
};
const jwtControls = {
  createToken,
  authorizeToken,
};
export default jwtControls;