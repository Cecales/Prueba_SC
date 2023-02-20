const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");

const app = express();

// DB Connection
require("./database");

// Settings
app.set("port", process.env.PORT || 3000);

app.use(cors());

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/customers", require("./routes/customers.routes"));

// Starting the server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
