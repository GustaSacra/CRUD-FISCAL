const express = require("express");
const router = express.Router();

const clienteRoutes = require("../modules/cliente/cliente.routes");

router.use("/clientes", clienteRoutes);

module.exports = router;