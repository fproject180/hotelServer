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
  var appliances_Status1 = req.body.appliance_status1;
  var appliances_Status2 = req.body.appliance_status2;
  var appliances_Status3 = req.body.appliance_status3;
  var appliances_Status4 = req.body.appliance_status4;
  var appliances_Status5 = req.body.appliance_status5;
  connection.query(
    "UPDATE Hotel_Booking SET appliance_status1=?,appliance_status2=?,appliance_status3=?,appliance_status4=?,appliance_status5=? WHERE mobileNo=?",
    [appliances_Status1,appliances_Status2,appliances_Status3,appliances_Status4,appliances_Status5,mobileNo],(err, rows, fields) => {
        if (err) {
            console.log(err);   
        } else {
            console.log("updated");
		res.sendStatus(200);
        }
    }
  );
});

router.get("/appliances",(req, res)=>{
    connection.query("SELECT appliance_status1,appliance_status2,appliance_status3,appliance_status4,appliance_status5 FROM Hotel_Booking",(err, rows, fields)=>{
        if (err) {
            console.log(err);
        } else {
            res.send(rows);
        }
    });
});

module.exports = router;
