const { io } = require("../index");
const jwt = require("jsonwebtoken");
const saveMessage = require("../utils/saveMessage");

io.on("connection", (client) => {
    console.log("CONNECTED: ", client.id);
    client.on("newMessage", async({text, token}) => {
        const auth = jwt.verify(token, process.env.JWT_PRIVATE);
        const message = await saveMessage({text, ...auth});
        io.emit("sendMessage", message);
    });
});