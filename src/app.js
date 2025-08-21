require("dotenv").config();
const express = require("express");
const sequelize = require("./config/database");
const routes = require("./routes");

const app = express();
app.use(express.json());
app.use("/api", routes);

sequelize.sync({ force: false }) // force: true recria tabelas
  .then(() => console.log("Banco sincronizado com sucesso"))
  .catch(err => console.error("Erro ao sincronizar o banco:", err));

app.listen(process.env.PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${process.env.PORT}`);
  });