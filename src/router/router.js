const express = require('express')
const categoriaController = require('../controller/categoriaController');
const lojaController = require('../controller/lojaController');
const produtoController = require('../controller/produtoController');
const usuarioController = require('../controller/usuarioController');
const router = express();

// Categoria
router.get('/categoria', categoriaController.get);
router.get('/categoria/:id', categoriaController.getById);
router.post('/categoria', categoriaController.post);
router.put('/categoria/:id', categoriaController.put);
router.delete('/categoria/:id', categoriaController.delet);

// Loja
router.get('/loja', lojaController.get);
router.get('/loja/:id', lojaController.getById);
router.post('/loja', lojaController.post);
router.put('/loja/:id', lojaController.put);
router.delete('/loja/:id', lojaController.delet);

// Produto
router.get('/produto', produtoController.get);
router.get('/produto/:id', produtoController.getById);
router.post('/produto', produtoController.post);
router.put('/produto/:id', produtoController.put);
router.delete('/produto/:id', produtoController.delet);

// Usuario
router.get('/usuario', usuarioController.get);
router.get('/usuario/:id', usuarioController.getById);
router.post('/usuario', usuarioController.post);
router.put('/usuario/:id', usuarioController.put);
router.delete('/usuario/:id', usuarioController.delet);

module.exports = router;