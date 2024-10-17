# Backend: Mongoose Snippet Mode
// models/Snippet.js
 const mongoose = require('mongoose');
 const snippetSchema = new mongoose.Schema({
  content: String,
  createdAt: { type: Date, default: Date.now },
 });
 module.exports = mongoose.model('Snippet', snippetSchema);
