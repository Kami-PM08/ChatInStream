const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    emun: ["STUDENT", "MODERATOR"],
  },
  created: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = model("User", UserSchema);
