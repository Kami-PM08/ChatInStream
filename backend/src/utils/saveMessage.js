const Message = require("../models/message");

const saveMessage = async (data) => {
  const message = new Message(data);
  await message.save();
  return message;
};

module.exports = saveMessage;
