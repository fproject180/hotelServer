const express = require("express");
const connection = require("../services/connection");
const router = express.Router();

router.get("/", (req, res) => {
  var value = 1;
  connection.query("SELECT * FROM amenties", [value], (err, rows) => {
    if (err) {
      console.log("error activating");
    } else {
      res.send(rows).status(200);
    }
  });
});

router.post("/", (req, res) => {
  var name = req.body.amenitiesName;
  var value = req.body.flag;
  if (value == "1") {
    connection.query(
      "UPDATE amenties SET flag= '1' WHERE amenitiesName=?",
      [name],
      (err, rows) => {
        if (err) {
          console.log("error updating");
        } else {
          res.sendStatus(200);
        }
      }
    );
  } else {
    connection.query(
      "UPDATE amenties SET flag= '0' WHERE amenitiesName=?",
      [name],
      (err, rows) => {
        if (err) {
          console.log("error updating");
        } else {
          res.sendStatus(200);
        }
      }
    );
  }
});

module.exports = router;
