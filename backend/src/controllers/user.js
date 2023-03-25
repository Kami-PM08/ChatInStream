const { request, response } = require("express");
const bcryptjs = require("bcrypt");

const User = require("../models/user");

const getUser = async (req = request, res = response) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        msg: "Usuario no encontrado",
      });
    }
    res.json({ user });
  } catch (error) {
    res.status(500).json({
      msg: "Error al traer usuario",
    });
  }
};

const getUsers = async (req = request, res = response) => {
  try {
    const users = await User.find();
    res.json({ users });
  } catch (error) {
    res.status(500).json({
      msg: "Error al traer usuarios",
    });
  }
};

const postUser = async (req = request, res = response) => {
  const { body } = req;

  const user = new User(body);

  const oldUser = await User.findOne({ user: body.user });

  if (oldUser) {
    return res.status(400).json({ msg: "El usuario ya existe" });
  }

  const salt = bcryptjs.genSaltSync();
  user.set("password", bcryptjs.hashSync(user.get("password"), salt));

  try {
    await user.save();

    res.json({
      msg: "Usuario creado",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error al crear usuario",
    });
  }
};

const deleteUser = async (req = request, res = response) => {
  const { id } = req.params;
  try {
    await User.findByIdAndDelete(id);

    res.json({
      msg: "Usuario eliminado",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error al eliminar usuario",
    });
  }
};

module.exports = {
  getUser,
  getUsers,
  postUser,
  deleteUser,
};
