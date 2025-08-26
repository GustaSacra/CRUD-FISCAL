require("dotenv").config();
const express = require("express");
const produtoRoutes = require('./routes/produtos.routes.js');

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    console.log('✅ Rotas de produtos sendo carregadas...');
    // Rota de teste
    this.server.get("/", (req, res) => res.send("Servidor rodando corretamente!"));
    // Rotas da API
    this.server.use('/api', produtoRoutes);
  }
}

module.exports = new App().server;