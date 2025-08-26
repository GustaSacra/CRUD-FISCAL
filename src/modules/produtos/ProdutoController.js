// O Controller agora importa o Serviço, e não mais o Model.
const ProdutoService = require('./ProdutoService');

module.exports = {
  async index(req, res) {
    try {
      // Delega a busca para a camada de serviço
      const produtos = await ProdutoService.findAll();
      return res.json(produtos);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao listar produtos.' });
    }
  },

  async store(req, res) {
    try {
      // O controller apenas pega os dados da requisição...
      const dadosDoProduto = req.body;
      
      // ...e passa a responsabilidade para a camada de serviço.
      const produto = await ProdutoService.create(dadosDoProduto);
      
      return res.status(201).json(produto);
    } catch (error) {
      return res.status(400).json({ error: 'Falha ao criar produto.', details: error.message });
    }
  }
};