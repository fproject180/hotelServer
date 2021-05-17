const router = require("express").Router();
const connection = require("../services/connection");

router.get("/", (req, res) => {
  connection.query("SELECT * FROM Hotel_Booking", (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      res.send(rows);
    }
  });
});

router.post("/", (req, res) => {
  var mobileNo = req.body.mobileNo;
  var city = req.body.city;
  var hotelName = req.body.hotelName;
  var roomType = req.body.roomType;
  var roomID = req.body.roomID;
  var roomIP = req.body.roomIP;
  var checkInDate = req.body.checkInDate;
  var checkOutDate = req.body.checkOutDate;
  var appliance1 = req.body.appliance1;
  var appliance2 = req.body.appliance2;
  var appliance3 = req.body.appliance3;
  var appliance4 = req.body.appliance4;
  var appliance5 = req.body.appliance5;
  var appliance_status1 = req.body.appliance_status1;
  var appliance_status2 = req.body.appliance_status2;
  var appliance_status3 = req.body.appliance_status3;
  var appliance_status4 = req.body.appliance_status4;
  var appliance_status5 = req.body.appliance_status5;

  connection.query(
    "INSERT INTO Hotel_Booking VALUES('" +
      mobileNo +
      "','" +
      city +
      "','" +
      hotelName +
      "','" +
      roomType +
      "','" +
      roomID +
      "','" +
      roomIP +
      "','" +
      checkInDate +
      "','" +
      checkOutDate +
      "','" +
      appliance1 +
      "','" +
      appliance2 +
      "','" +
      appliance3 +
      "','" +
      appliance4 +
      "','" +
      appliance5 +
      "','" +
      appliance_status1 +
      "','" +
      appliance_status2 +
      "','" +
      appliance_status3 +
      "','" +
      appliance_status4 +
      "','" +
      appliance_status5 +
      "')",
    (err, rows, fields) => {
      if (err) {
        console.log(err);
      } else {
        res.sendStatus(200);
      }
    }
  );
});

router.get("/", (req, res) => {
  connection.query(
    "SELECT appliance_status1, appliance_status2, appliance_status3, appliance_status4, appliance_status5 FROM Hotel_Booking",
    (err, rows) => {
      if (err) {
        console.log(err);
      } else {
        res.send(rows);
      }
    }
  );
});

router.post("/appliances", (req, res) => {
  var appliances_Status1 = req.body.status1;
  var appliances_Status2 = req.body.status2;
  var appliances_Status3 = req.body.status3;
  var appliances_Status4 = req.body.status4;
  var appliances_Status5 = req.body.status5;
  connection.query(
    "UPDATE Hotel_Booking SET appliances_Status1=?,appliances_Status2=?appliances_Status3=?appliances_Status4=?appliances_Status5=?",
    [
      appliances_Status1,
      appliances_Status2,
      appliances_Status3,
      appliances_Status4,
      appliances_Status5,
    ],
    (err, rows) => {
      if (err) {
        console.log(err);
      } else {
        console.log("updated");
      }
    }
  );
});

module.exports = router;
