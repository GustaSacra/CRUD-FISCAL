const clienteService = require("./cliente.service");

class ClienteController {
  async criar(req, res) {
    try {
      const cliente = await clienteService.criar(req.body);
      res.status(201).json(cliente);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async listar(req, res) {
    const clientes = await clienteService.listar();
    res.json(clientes);
  }

  async buscar(req, res) {
    const cliente = await clienteService.buscarPorId(req.params.id);
    if (!cliente) return res.status(404).json({ error: "Cliente não encontrado" });
    res.json(cliente);
  }

  async atualizar(req, res) {
    const cliente = await clienteService.atualizar(req.params.id, req.body);
    if (!cliente) return res.status(404).json({ error: "Cliente não encontrado" });
    res.json(cliente);
  }

  async deletar(req, res) {
    const cliente = await clienteService.deletar(req.params.id);
    if (!cliente) return res.status(404).json({ error: "Cliente não encontrado" });
    res.json({ message: "Cliente removido com sucesso" });
  }
}

module.exports = new ClienteController();
