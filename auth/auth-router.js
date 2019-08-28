const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../users/users-model");

const router = express.Router();

router.post("/register", (req, res) => {});

router.post("/login", (req, res) => {});

module.exports = router;
