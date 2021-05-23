const connection = require("../services/connection");

const router = require("express").Router();

router.get("/login", (req, res) => {
  res.send("Login Page");
});

router.post("/login", (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  var mobileNo = req.body.mobileNo;

  connection.query(
    "SELECT * FROM Hotel_Booking WHERE mobileNo = ?",
    [mobileNo],
    (err, rows, fields) => {
      if (rows.length > 0) {
        console.log("user exists");
        res.sendStatus(200);
      } else {
        console.log("User doesnt exist");
        res.sendStatus(406);
      }
    }
  );
});

module.exports = router;
