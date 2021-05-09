const router = require("express").Router();
const connection = require("../services/connection");

router.get("/", (req, res) => {
  var mobileNo = req.body.mobileNo;
  connection.query(
    "SELECT hotelName, city, roomType,roomID, roomIP, checkInDate, checkOutDate,  FROM Hotel_Booking WHERE mobileNo=?",
    [mobileNo],
    (err, rows) => {
      if (err) {
        console.log("No hotels found");
      } else {
        res.send(rows);
      }
    }
  );
});




router.post("/appliances", (req, res) => {
  var mobileNo = req.body.mobileNo;
  connection.query(
    "SELECT appliance1,appliance_status1, appliance2,appliance_status2 appliance3,appliance_status3 appliance4,appliance_status4, appliance5, appliance_status5 FROM Hotel_Booking WHERE mobileNo=?",
    [mobileNo],
    (err, rows) => {
      if (err) {
        console.log("Error Selecting Appliance");
      } else {
        res.send(rows);
      }
    }
  );
});

router.get("/", (req, res) => {
  connection.query(
    "SELECT name, email, password, mobileNo, address,dob FROM Hotel_User",
    (err, rows) => {
      if (err) {
        console.log("No users found!");
      } else {
        res.send(rows);
      }
    }
  );
});

module.exports = router;
