const express = require("express");
const { getHabits } = require("../controllers/habitController");

const habitRouter = express.Router();

habitRouter.route("/").get(getHabits);

module.exports = habitRouter;
