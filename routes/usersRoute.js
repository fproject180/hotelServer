const connection = require('../services/connection');

const router = require('express').Router();

router.get("/",(req, res)=>{
    connection.query("SELECT * FROM Hotel_User",(err, rows)=>{
        if (err) {
            console.log("No users found!");
        } else {
            res.send(rows);
        }
    });
});