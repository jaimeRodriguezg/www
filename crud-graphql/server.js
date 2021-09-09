const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

let cursos = require('./cursos')

const app = express()

const schema = buildSchema(`
    type Curso{
        id: ID!
        titulo: String!
        visitas: Int
    }

    input CursoInput{
        titulo: String!
        visitas: Int
    }

    type Alert {
        message: String!
    }

    type Mutation{
        addCurso(input: CursoInput): Curso
        updateCurso(id: ID!, input: CursoInput): Curso
        deleteCurso(id: ID!) : Alert
    }

    type Query {
        getCursos: [Curso]
        getCurso(id: ID!): Curso
    }
`); //Plantillas

const root = {
    getCursos() {
        return cursos;
    },
    getCurso( {id} ){
        console.log(id)
        return cursos.find( (curso) => id == curso.id )
    },
    addCurso( {input} ){
        const {titulo, visitas} = input
        const id = String(cursos.length + 1)
        const curso = {id, titulo, visitas}
        cursos.push(curso)
        return curso
    },
    updateCurso({id, input}){
        const {titulo, visitas} = input
        const indice = cursos.findIndex( (curso) => id === curso.id )
        const curso = cursos[indice]
        const nuevoCurso = Object.assign( curso, {titulo, visitas});
        curso[indice] = nuevoCurso
        return nuevoCurso
    },
    deleteCurso ({id}) {
        cursos = cursos.filter ((curso)=> curso.id != id)
        return {
            message: `El curso con id ${id} fue eleminado`
        }
    }
}

app.get('/', (req, res) =>{
    // res.send('Bienvenido')
    res.send(cursos)
});

//middleware
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true

}))

app.listen(3000, ()=>{
    console.log('Servidor escuchando en el puerto 3000')
})