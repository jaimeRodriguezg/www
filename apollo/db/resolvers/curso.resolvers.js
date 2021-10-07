
// let cursos = [];

const Curso = require('../models/curso')
module.exports = {
    Query: {
        //NombreQuery(obj, {parametros})
        // getCursos( obj, {page, lmit} ){
        //     if (page != undefined){
        //         return cursos.slice( (page - 1)* limit, (page) * limit );
        //     }
        //     return cursos;
        // },

        async getCursos( obj, {page, limit}){
            //Curso.find() es una búsqueda de tipo mongoSchema para encontrar objetos
            const cursos = await CuArso.find()
            return cursos
        },

        // getCurso( obj, {id} ){
        //     console.log(id);
        //     return cursos.find((curso) => id == curso.id )
        // }

        async getCurso(obj, {id}){
            const curso = await Curso.findById(id)

            return curso
        }
    },
    Mutation: {
        //La definición de métodos de mutaciones método (obj, {params....})
        // addCurso(obj, { input }){
        //     const id = String(cursos.length + 1);
        //     //spread operator --> toma todos los parámetros internos del input
        //     const curso = {id, ...input}
        //     cursos.push(curso);
        //     return curso
        // }

        async addCurso(obj, { input }) {
            // Crea un objeto de tipo mongoSchema
            const curso = new Curso(input)
            //Método de guardado de mongodb, promise
            await curso.save() //Objeto flush (id se va a llenar con el id de mongodb)
            return curso
        },
        async updateCurso(obj , {id, input}){
            const curso = await Curso.findByIdAndUpdate(id, input)
            return curso
        },

        async deleteCurso(obj, {id}){
            await Curso.deleteOne({_id: id});
            return {
                message: `El curso con id: ${id} eliminado`
            }
        }
    }
}