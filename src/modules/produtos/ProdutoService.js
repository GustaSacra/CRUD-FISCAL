const Produto = require('../../models/produto');

class ProdutoService {
  /**
   * Cria um novo produto no banco de dados.
   * @param {object} dadosDoProduto - Contém nome, preco e estoque.
   * @returns {Promise<Produto>} O produto criado.
   */
  async create({ nome, preco, estoque }) {
    // Aqui você poderia adicionar lógicas de negócio,
    // como validar se o preço é positivo, por exemplo.
    const produto = await Produto.create({ nome, preco, estoque });
    return produto;
  }

  /**
   * Busca todos os produtos no banco de dados.
   * @returns {Promise<Produto[]>} Uma lista de todos os produtos.
   */
  async findAll() {
    const produtos = await Produto.findAll();
    return produtos;
  }

  // Futuramente, você adicionaria outros métodos aqui:
  // async findById(id) { ... }
  // async update(id, dadosParaAtualizar) { ... }
  // async delete(id) { ... }
}

// Exportamos uma instância da classe, seguindo o padrão Singleton
// para garantir que teremos a mesma instância do serviço em toda a aplicação.
module.exports = new ProdutoService();