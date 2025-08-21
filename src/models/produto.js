const { Model, DataTypes } = require('sequelize');

class Produto extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      preco: DataTypes.DECIMAL(10, 2),
      estoque: DataTypes.INTEGER,
    }, {
      sequelize,
      tableName: 'produtos' // É uma boa prática definir o nome da tabela
    })
  }
}

module.exports = Produto;