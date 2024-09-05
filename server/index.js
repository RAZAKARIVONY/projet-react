const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");

const contrat1router = require("./routes/premiercontrat.routes");
// const contrat2router = require("./routes/deuxiemecontrat.routes");
const moncontrat2 = require("./routes/moncontrat2.routes");
const contrat3router = require("./routes/troisiemecontrat.routes");
const reclassement = require("./routes/reclassement.routes");
const router = require("./routes/recrutement.routes");
const tstRoute = require("./routes/auth.routes");
const config = require("./database/dbase");

mongoose.Promise = global.Promise;

mongoose
  .connect(config.dbs, {
    useNewUrlParser: true,
    //   useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Application connecte succes");
  })
  .catch((err) => {
    console.log("Database error:" + err);
  });

const app = express();

// Middlewares

app.use(cors());

app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);
app.use(bodyparser.json());

app.use("/api_recrut", router); // http://localhost:4050/api_recrut
app.use("/api_auth", tstRoute); // http://localhost:4050/api_auth
app.use("/api_contrat1", contrat1router); // http://localhost:4050/api_contrat1
// app.use("/api_contrat2", contrat2router); // http://localhost:4050/api_contrat2
app.use("/api_moncontrat2", moncontrat2); // http://localhost:4050/api_moncontrat2
app.use("/api_contrat3", contrat3router); // http://localhost:4050/api_contrat3
app.use("/api_reclassement", reclassement); // http://localhost:4050/api_reclassement

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

const PORT = 4050;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}...`);
});
