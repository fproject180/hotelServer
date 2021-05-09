const connection = require("../services/connection");

const router = require("express").Router();

router.get("/register", (req, response) => {
    response.send("register page");
});

router.post("/register", (req, response) => {
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;
  var mobileNo = req.body.mobileNo;
  var address = req.body.address;
  var dob = req.body.dob;

  connection.query("SELECT * FROM Hotel_User WHERE mobileNo = ?", [mobileNo],(err, rows, fields) => {
    if (rows.length > 0) {
      console.log("User Exist");
      response.sendStatus(406);
    } else {
      connection.query(
        "INSERT INTO HOTEL_USER VALUES('" +
          name +
          "','" +
          email +
          "','" +
          password +
          "','" +
          mobileNo +
          "','" +
          address +
          "','" +
          dob +
          "')",
        (err, rows, fields) => {
          if (err) {
            console.log("error in creating user");
            response.sendStatus(400);
          } else {
            console.log("user created successfully");
            response.sendStatus(201);
          }
        }
      );
    }
  });

});

module.exports = router;
