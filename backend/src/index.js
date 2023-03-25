// Env
require("dotenv").config();

const express = require("express");
const cors = require("cors");

// Routes imports
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");

// DB
const dbConnection = require("./database/config");

// Server
const app = express();
const port = process.env.PORT || 8080;
const paths = {
  users: "/user",
  auth: "/auth",
};

// Middlewares
app.use(cors({ exposedHeaders: "jwt" }));
app.use(express.json());

// Use routes
app.use(paths.users, userRoutes);
app.use(paths.auth, authRoutes);

// Use DB
dbConnection();

app.listen(port, () =>
  console.log(`Hello Node app listening on port ${port}!`)
);
