const express = require("express");
const connection = require("../services/connection");
const router = express.Router();

//Routes
router.get("/", (req, res) => {
  res.send("we are on login page");
});

router.post("/", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  connection.query(
    "SELECT * FROM SignUp WHERE email = ? AND password = ?",
    [(email, password)],
    (err, rows) => {
      if (rows.length > 0) {
        req.session.loggedIn = true;
        req.session.email = email;
        req.session.password = password;
        res.sendStatus(200);
      } else {
      }
    }
  );
});

module.exports = router;
