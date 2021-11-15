const usuario = require('../models/usuario');
const Usuario = require('../models/usuario');
module.exports = {
    Query: {
        async getUsuarios(){
            return await Usuario.find();
        },
        async getUsuario(obj, {id}){
            return await Usuario.findById(id)
        }
    },
    Mutation: {
        async registrar(obj, {Input}){
            const Usuario = new Usuario(input);
            await usuario.save();
            return usuario;
        }
    }
}