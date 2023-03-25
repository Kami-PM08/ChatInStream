const { request, response } = require("express");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcrypt");
const User = require("../models/user");

const login = async (req = request, res = response) => {
    const { user, password } = req.body;
  
    try {
      const userFound = await User.findOne({ user });
  
      if (!userFound || !bcryptjs.compareSync(password, userFound.get("password"))) {
        return res.status(404).json({
          msg: "El usuario o contraseña no es valido",
        });
      }
  
      const token = jwt.sign(
        { user, role: userFound.role },
        process.env.JWT_PRIVATE
      );
  
      res.header("jwt", token);
  
      res.json({
        msg: "Ingreso correctamente",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        msg: "Error de autenticación",
      });
    }
  };
  
  module.exports = {
    login,
  };