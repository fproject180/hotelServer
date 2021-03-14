const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("./services/connection");
const signInRoute = require("./routes/loginRoute");
const registerRoute = require("./routes/registerRoute");
const usersRoute = require("./routes/users");
const session = require("express-session");

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

app.use("/loginRoute", signInRoute);
app.use("/registerRoute", registerRoute);
app.use("/usersRoute", usersRoute);

//routes
app.get("/", (req, res) => {
  res.send("we are on home").status(200);
});

app.listen(3000);
