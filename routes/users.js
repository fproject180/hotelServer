const express = require("express");
const connection = require("../services/connection");
const router = express.Router();

router.get("/", (req, res) => {
  connection.query("SELECT * FROM SignUp", (err, rows) => {
    res.send(rows).status(200);
  });
});

module.exports = router;
