// Env
require("dotenv").config();

const express = require("express");
const cors = require("cors");

// Routes imports
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const messageRoutes = require("./routes/message");

// DB
const dbConnection = require("./database/config");

// Server
const app = express();
const port = process.env.PORT || 8080;
const paths = {
  user: "/user",
  auth: "/auth",
  message: "/message"
};

// Middlewares
app.use(cors({ exposedHeaders: "jwt" }));
app.use(express.json());

// Use routes
app.use(paths.user, userRoutes);
app.use(paths.auth, authRoutes);
app.use(paths.message, messageRoutes);

// Use DB
dbConnection();

app.listen(port, () =>
  console.log(`Hello Node app listening on port ${port}!`)
);
