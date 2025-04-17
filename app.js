//Import
const express = require("express");
const User = require("./models/User");

const app = express();

app.use(express.json());

//Conexão com Banco de Dados
const DB = require("./DB/conn");
DB();

// Router
const route = require("./Routes/route");
app.use("/auth", route);

app.listen(3000, () => {
  console.log("Servidor Rodando");
});
