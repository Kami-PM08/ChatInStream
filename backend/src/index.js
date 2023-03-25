// Env
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const socketIO = require("socket.io");
const http = require("http");

// Routes imports
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const messageRoutes = require("./routes/message");

// DB
const dbConnection = require("./database/config");

// Server
const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 8080;
const paths = {
  user: "/user",
  auth: "/auth",
  message: "/message",
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

// Socket IO
module.exports.io = socketIO(server, {
  cors: {
    origin: "http://localhost:3000"
  }
});
require("./controllers/chatSocket");

server.listen(port, () =>
  console.log(`Hello Node app listening on port ${port}!`)
);
