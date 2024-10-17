# Backend: Express API Server
// server.js
 const express = require('express');
const mongoose = require('mongoose');
 const Snippet = require('./models/Snippet');
 const app = express();
 const PORT = process.env.PORT || 3001;
 mongoose.connect('mongodb://localhost:27017/codecrate', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 });
 app.use(express.json());
 app.get('/api/snippets', async (req, res) => {
  const snippets = await Snippet.find();
  res.json(snippets);
 });
 app.post('/api/snippets', async (req, res) => {
  const { content } = req.body;
  const snippet = new Snippet({ content });
  await snippet.save();
  res.status(201).json(snippet);
 });
 app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
