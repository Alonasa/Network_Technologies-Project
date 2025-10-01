const express = require("express");
const {
  getUser,
  createUser,
  registerUser,
  checkBody,
} = require("../controllers/userController");

const userRouter = express.Router();

userRouter.route("/").get(getUser).post(createUser);

userRouter
  .route("/register")

  .post(checkBody, registerUser);

module.exports = userRouter;
