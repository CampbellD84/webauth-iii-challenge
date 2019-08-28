const express = require("express");
const restricted = require("../middleware/restricted-middleware");

const Users = require("./users-model");

const router = express.Router();

router.get("/", restricted, async (req, res) => {
  const users = await Users.findUsers();

  try {
    res.status(200).json(users);
  } catch ({ err }) {
    res.status(500).json({ err, message: "Cannot retrieve users." });
  }
});

module.exports = router;
