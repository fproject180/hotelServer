const express = require("express");
const connection = require("../services/connection");
const router = express.Router();

//Routes
router.get("/", (req, res) => {
  res.send("we are on register page");
});

router.post("/", (req, res) => {
  connection.query(
    'INSERT INTO SignUp VALUES("' +
      req.body.Name +
      '","' +
      req.body.Email +
      '","' +
      req.body.Password +
      '","' +
      req.body.MobileNo +
      '")',
    (err, rows, fields) => {
      if (err) {
        console.log("query not successfull");
        res.sendStatus(400);
      } else {
        console.log("query successfull");
        res.sendStatus(201);
      }
    }
  );
});

module.exports = router;
