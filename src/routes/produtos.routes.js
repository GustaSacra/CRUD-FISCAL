const { Router } = require('express');
const ProdutoController = require('../modules/produtos/ProdutoController');

const routes = new Router();

routes.get('/produtos', ProdutoController.index);
routes.post('/produtos', ProdutoController.store);

module.exports = routes;