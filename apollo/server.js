const { ApolloServer } = require('apollo-server');
const { makeExecutableSchema } = require('graphql-tools');
//Importamos los datos de prueba
let cursos = require('./cursos');
//Definición de las estructuras de grpahql
const typeDefs = `
type Curso{
    id: ID!
    titulo: String!
    visitas: Int
}

input CursoInput {
    titulo: String!
    visitas: Int
}
type Query {
    getCursos(page: Int, limit: Int = 1): [Curso]
}
type Mutation {
    addCurso(input: CursoInput): Curso
}
`;

//La asignación de definiciones y métodos de resolución
const schema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: {
        Query: {
            // La definición de métodos de consultas es metodo (obj, {params ...})
            getCursos(obj, {page, limit}){
                if (page !== undefined){
                    return cursos.slice((page-1)*limit, (page)*limit);
                }
                return cursos;
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
});


const server = new ApolloServer({
    schema: schema
});

//puerto 4000 por defecto
server.listen().then(({url}) => {
    console.log(`Servidor Iniciado en ${url}`)
});