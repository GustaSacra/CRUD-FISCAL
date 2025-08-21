require('dotenv').config({ path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env' });

module.exports = {
  // Adiciona a chave 'development' aqui
  development: {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    define: {
      timestamps: true,
      underscored: true,
    },
  },
  // Você pode adicionar outros ambientes no futuro
  test: {
    // Configurações para o ambiente de teste
  },
  production: {
    // Configurações para o ambiente de produção
  }
};