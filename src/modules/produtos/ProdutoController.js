const Produto = require('../../models/produto');

module.exports = {
  // Método para listar todos os produtos
  async index(req, res) {
    try {
      const produtos = await Produto.findAll();
      return res.json(produtos);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao listar produtos.' });
    }
  },

  // Método para criar um novo produto
  async store(req, res) {
    try {
      const { nome, preco, estoque } = req.body;
      const produto = await Produto.create({ nome, preco, estoque });
      return res.status(201).json(produto);
    } catch (error) {
      return res.status(400).json({ error: 'Falha ao criar produto.', details: error.message });
    }
  }
};