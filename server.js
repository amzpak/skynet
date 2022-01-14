const express = require("express");
const bodyParser = require("body-parser");
const ProvidersRoutes = require("./app/routes/providers.routes")

// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");

const app = express();

/*var corsOptions = {
  origin: "http://localhost:8081"
};*/

//app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Service application with auto Triggers." });
});

require("./app/routes/providers.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
