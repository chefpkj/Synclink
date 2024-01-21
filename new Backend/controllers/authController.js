import DbLayer from "../databaseLayer/authDbLayer.js";
import createUser from "../utils/createUser.js";
import isValid from "../utils/loginBodyValidation.js";

const login = async (req, res) => {
  const { error } = isValid(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const result = await DbLayer.login(req.body);
  if (result?.status === 200) {
    //apna success logic likho
    return res.status(result?.status).send(result?.message);
  } else {
    return res.status(result?.status).send(result?.message);
  }
};
const signup = async (req, res) => {
  try {
    const { error } = isValid(req.body);
    if (error) {
      console.log("this")
      return res.status(400).send(error.details[0].message);
    }

    const result = await createUser(req.body?.email, req.body?.password);
    console.log("result",result);
    if (result.status === 400) {
      console.log("thiskjlooi");

      return res.status(400).send(result?.details);
      
    }
    return res.status(200).send(`Congratulations, your account has been successfully created.`);
  } catch (err) {
    console.error(`Error:`, err);
    return res.status(400).send("Something went wrong :(");
  }
};

const authController = {
  login,
  signup,
};

export default authController;

// localhost:4000/user/
