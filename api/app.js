const express = require("express");
const cors = require("cors");
const indexRouter = require("./routers/index");
const bodyParser = require("body-parser");
const config = require("./config");

const app = express();

app.use(cors({ origin: ["http://academy.tabaani.co", "https://academy.tabaani.co", "academy.tabaani.co", "http://localhost:3000","https://host-academy-frontend-production.up.railway.app"],     credentials: true
}));

app.use(express.json());

// Routes
app.use("/", indexRouter);

app.listen(config.port, () =>
  console.log(`App is listening on URI http://localhost:${config.port}`)
);
