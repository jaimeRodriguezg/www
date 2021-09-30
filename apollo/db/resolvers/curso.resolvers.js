
let cursos = [];
module.exports = {
    Query: {
        //NombreQuery(obj, {parametros})
        getCursos( obj, {page, lmit} ){
            if (page != undefined){
                return cursos.slice( (page - 1)* limit, (page) * limit );
            }
            return cursos;
        },
        getCurso( obj, {id} ){
            console.log(id);
            return cursos.find((curso) => id == curso.id )
        }
    },
    Mutation: {
        //La definición de métodos de mutaciones método (obj, {params....})
        addCurso(obj, { input }){
            const id = String(cursos.length + 1);
            //spread operator --> toma todos los parámetros internos del input
            const curso = {id, ...input}
            cursos.push(curso);
            return curso
        }
    }
}