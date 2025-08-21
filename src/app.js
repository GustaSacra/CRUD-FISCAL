require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("Servidor rodando!"));

app.listen(process.env.PORT || 3000, () => {
  console.log(`🚀 Servidor rodando na porta ${process.env.PORT || 3000}`);
});
