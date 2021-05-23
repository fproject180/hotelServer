const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("./services/connection");
const session = require("express-session");

const registerRoute = require("./routes/registerRoute");
const usersRoute = require("./routes/usersRoute");
const hotelRoute = require("./routes/hotelRoute");

app.set("view engine", "ejs");

//middlewares
app.use(
  session({
    secret: "Server",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true },
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));
app.use("/auth", registerRoute);
app.use("/usersRoute", usersRoute);
app.use("/hotelRoute", hotelRoute);

//routes
app.get("/", (req, res) => {
  res.status(200);
  res.render("index.html");
});

app.listen(3000);
