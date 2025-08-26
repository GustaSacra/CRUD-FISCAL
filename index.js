const express = require("express");
const router = express.Router();

console.log("Testando caminho do cliente.routes...");
const clienteRoutes = require("../modules/cliente/cliente.routes");
console.log("✅ Encontrou cliente.routes");

console.log("Testando caminho do produtos.routes...");
const produtoRoutes = require("../routes/produtos.routes.js"); // Verifique se este caminho está certo
console.log("✅ Encontrou produtos.routes");

router.use("/clientes", clienteRoutes);
router.use(produtoRoutes);

module.exports = router;