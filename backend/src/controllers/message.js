const { request, response } = require("express");
const Message = require("../models/message");
const saveMessage = require("../utils/saveMessage");

const getMessagesByChat = async (req = request, res = response) => {
  const { id } = req.params;

  try {
    const messages = await Message.find({ chatId: id });
    res.json({ messages });
  } catch (error) {
    res.status(500).json({
      msg: "Error al traer mensajes",
    });
  }
};

const postMessage = async (req = request, res = response) => {
  const { text } = req.body;

  try {
    const message = await saveMessage({ text, ...req.auth });

    res.json({
      message,
    });
  } catch (error) {
    console.log("Error al crear mensaje: ", error);
  }
};

const deleteMessage = async (req = request, res = response) => {
  const { id } = req.params;
  try {
    await Message.findByIdAndDelete(id);

    res.json({
      msg: "Se ha eliminado el mensaje",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error al eliminar mensaje",
    });
  }
};

module.exports = {
  getMessagesByChat,
  postMessage,
  deleteMessage,
};
