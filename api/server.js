// Configuración del server
require("dotenv").config().parsed;

const express = require("express");
const app = express();
const volleyball = require("volleyball");
const db = require("./config/index.js");
const models = require("./models");
const routes = require("./routes");
const cors = require("cors");
const brcypt = require("bcrypt");
const cookieParser = require("cookie-parser");

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use(volleyball);
app.use(express.static("build"));
app.use(express.json());
app.use(cookieParser());

app.use("/api", routes);

// app.use("/api", (req, res) => {
//   res.sendStatus(404);
// });

db.sync({ force: false })
  .then(() => {
    console.log("Db conectada");
    app.listen(9000, () =>
      console.log("servidor escuchando en el puerto 9000")
    );
  })
  .catch((error) => console.log("No se puede conectar al sevidor", error));
