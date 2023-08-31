const express = require("express");
const cors = require("cors");
const indexRouter = require("./routers/index");
const bodyParser = require("body-parser");
const config = require("./config");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, // Set credentials to true
  })
);
app.use(express.json());

// Routes
app.use("/", indexRouter);

app.listen(config.port, () =>
  console.log(`App is listening on URI http://localhost:${config.port}`)
);
