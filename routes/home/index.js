"use strict";

const express = require("express");
const router = express.Router();

const ctrl = requrie("./home.ctrl.js");

router.get("/", ctrl.hello);
router.get("/login", ctrl.login);

module.exports = router;