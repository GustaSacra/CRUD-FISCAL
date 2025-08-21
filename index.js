const express = require("express");
const router = express.Router();

console.log("Testando caminho do cliente.routes...");
const clienteRoutes = require("../modules/cliente/cliente.routes");
console.log("✅ Encontrou cliente.routes");

router.use("/clientes", clienteRoutes);

module.exports = router;