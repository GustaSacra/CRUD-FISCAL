const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

// Importe seus modelos aqui
const Produto = require('../models/produto');

// Crie um array com todos os seus modelos
const models = [Produto];

class Database {
  constructor() {
    this.init();
  }

  init() {
    // Cria a conexão com o banco de dados
    this.connection = new Sequelize(dbConfig.development);

    // Inicializa cada modelo, passando a conexão
    models.map(model => model.init(this.connection));
  }
}

module.exports = new Database();