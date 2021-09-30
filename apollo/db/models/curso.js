const mongoose = require('mongoose');

//Declaración del modelo de curso
const cursoSchema = new mongoose.Schema({
    titulo: String,
    visitas: Number,
});

// exporrtando modularmente a curso como mongo schema
module.exports = mongoose.model('Curso', cursoSchema)