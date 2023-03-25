const { Schema, model } = require("mongoose");

const MessageSchema = Schema({
  chatId: {
    type: String,
    default: "0",
  },
  text: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  userRole: {
    type: String,
    required: true,
    emun: ["STUDENT", "MODERATOR"],
  },
  created: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = model("Message", MessageSchema);
