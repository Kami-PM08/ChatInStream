const express = require("express");

// Routes imports
const userRoutes = require("./routes/user");

// DB
const dbConnection = require("./database/config");

// Server
const app = express();
const port = process.env.PORT || 8080;
const paths = {
  users: "/user",
};

// Middlewares
app.use(express.json());

// Use routes
app.use(paths.users, userRoutes);

// Use DB
dbConnection();

app.listen(port, () =>
  console.log(`Hello Node app listening on port ${port}!`)
);
