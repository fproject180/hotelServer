const express = require("express");
const connection = require("../services/connection");
const router = express.Router();

//get request
router.get("/", (request, response) => {
  response.send("we are on hotel route");
});

router.post("/", (request, response) => {
  var city = request.body.city;
  connection.query("SELECT * FROM hotels WHERE city=?", [city], (err, rows) => {
    response.send(rows).status(200);
    if (err) {
      console.log("error in query");
    } else {
      console.log("successful query");
    }
  });
});

module.exports = router;
