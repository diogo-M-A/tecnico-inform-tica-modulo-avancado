const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
const produtos = [];
app.use(express.json());


// Lista os produtos cadastrados em formato JSON
app.get('/produtos', (req, res) => {
  res.json(produtos);
});

// Cadastra um produto
app.post('/produtos', (req, res) => {
  const { nome, descricao, preco } = req.body;
  const produto = { id: uuidv4(), nome, descricao, preco };
  produtos.push(produto);
  res.status(201).json(produto);
});

// Atualiza os dados de um produto
app.put('/produtos/:id', (req, res) => {
  const { id } = req.params;
  const { nome, descricao, preco } = req.body;
  const produtoIndex = produtos.findIndex((produto) => produto.id === id);
  if (produtoIndex < 0) {
    return res.status(404).json({ mensagem: 'Produto não encontrado' });
  }
  const produto = { id, nome, descricao, preco };
  produtos[produtoIndex] = produto;
  res.json(produto);
});

// Remove determinado produto
app.delete('/produtos/:id', (req, res) => {
  const { id } = req.params;
  const produtoIndex = produtos.findIndex((produto) => produto.id === id);
  if (produtoIndex < 0) {
    return res.status(404).json({ mensagem: 'Produto não encontrado' });
  }
  produtos.splice(produtoIndex, 1);
  res.json({ mensagem: 'Produto removido com sucesso' });
});

// Inicia o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});

