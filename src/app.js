require("dotenv").config();
const express = require("express");
const produtoRoutes = require('./routes/produtos.routes.js'); // Importe as rotas de produtos

const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("Servidor rodando!"));

app.listen(process.env.PORT || 3000, () => {
  console.log(`🚀 Servidor rodando na porta ${process.env.PORT || 3000}`);
});

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json()); // Permite que o express entenda JSON
  }

  routes() {
    this.server.use('/api', produtoRoutes); // Use as rotas com o prefixo /api
  }
}

module.exports = new App().server;