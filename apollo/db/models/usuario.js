const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    email: String,
    pass: String,
    token: String,
})

module.exports = mongoose.model('Usuario',usuarioSchema);