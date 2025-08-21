const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const Cliente = sequelize.define("Cliente", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nome: { type: DataTypes.STRING, allowNull: false },
  cnpj_cpf: { type: DataTypes.STRING, allowNull: false, unique: true },
  email: { type: DataTypes.STRING },
  telefone: { type: DataTypes.STRING },
  endereco: { type: DataTypes.STRING }
}, {
  tableName: "clientes",
  timestamps: true
});

module.exports = Cliente;