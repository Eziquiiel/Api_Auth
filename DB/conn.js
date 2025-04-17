const mongoose = require("mongoose");
require("dotenv").config();

const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASS;

async function main() {
  try {
    await mongoose.connect(
      `mongodb+srv://${db_user}:${db_password}@cluster0.nqmeitz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );

    console.log("Conectado ao Banco de Dados");
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}

module.exports = main;
