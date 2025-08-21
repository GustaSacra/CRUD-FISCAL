const Cliente = require("./cliente.model");

class ClienteService {
  async criar(data) {
    return await Cliente.create(data);
  }
  async listar() {
    return await Cliente.findAll();
  }
  async buscarPorId(id) {
    return await Cliente.findByPk(id);
  }
  async atualizar(id, data) {
    const cliente = await Cliente.findByPk(id);
    if (!cliente) return null;
    return await cliente.update(data);
  }
  async deletar(id) {
    const cliente = await Cliente.findByPk(id);
    if (!cliente) return null;
    await cliente.destroy();
    return cliente;
  }
}

module.exports = new ClienteService();
