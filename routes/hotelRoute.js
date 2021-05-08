const router = require('express').Router();
const connection = require("../services/connection");

router.get('/',(req, res)=>{
    connection.query('SELECT * FROM Hotel_Booking',(err, rows)=>{
        if (err) {
            console.log("No hotels found");
        } else {
            res.send(rows);
        }
    });
});

module.exports = router;