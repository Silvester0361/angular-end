const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('Details', ItemSchema);