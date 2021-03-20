const express = require("express");
const connection = require("../services/connection");
const router = express.Router();
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  res.send("we are on signIn route");
});

router.post("/", (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  connection.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password],
    (err, rows) => {
      req.session.loggedin = true;
      req.session.email = email;
      res.sendStatus(200);
    }
  );
});

module.exports = router;
