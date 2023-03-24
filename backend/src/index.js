
const express = require("express");

// Routes imports

// DB

// Server
const app = express();
const port = process.env.PORT || 8080;

// Middlewares

// Use routes

app.listen(port, () => console.log(`Hello Node app listening on port ${port}!`));