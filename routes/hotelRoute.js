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
  var appliances_Status1 = req.body.status1;
  var appliances_Status2 = req.body.status2;
  var appliances_Status3 = req.body.status3;
  var appliances_Status4 = req.body.status4;
  var appliances_Status5 = req.body.status5;
  connection.query(
    "UPDATE Hotel_Booking SET appliances_Status1=?,appliances_Status2=?appliances_Status3=?appliances_Status4=?appliances_Status5=?",
    [appliances_Status1,appliances_Status2,appliances_Status3,appliances_Status4,appliances_Status5],(err, rows, fields) => {
        if (err) {
            console.log(err);   
        } else {
            console.log("updated");
        }
    }
  );
});

router.get("/appliances",(req, res)=>{
    connection.query("SELECT appliances_Status1,appliances_Status2,appliances_Status3,appliances_Status4,appliances_Status5 FROM Hotel_Booking",(err, rows, fields)=>{
        if (err) {
            console.log(err);
        } else {
            res.send(rows);
        }
    });
});

module.exports = router;
