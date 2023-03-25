const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB online");
  } catch (error) {
    console.error(error);
    throw new Error("Error de conexión con MongoDB");
  }
};

module.exports = dbConnection;
