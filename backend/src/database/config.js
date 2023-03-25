const mongoose = require("mongoose");

const url = "mongodb+srv://admin:CnzGdW1RJuq0nIPo@defaultcluster.ezgvqhl.mongodb.net/test";

const dbConnection = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(url);
    console.log("MongoDB online");
  } catch (error) {
    console.error(error);
    throw new Error("Error de conexión con MongoDB");
  }
};

module.exports = dbConnection;
