const express = require('express');
const { GraphQLSchema, GraphQLObjectType, GraphQLString, graphql, GraphQLInt } =  require('graphql');
const app = express()


const cursoType = new GraphQLObjectType({
    name: 'Curso',
    fields: {
        titulo: {type: GraphQLString},
        visitas: {type: GraphQLInt}
    }
})

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "RootQueryType",
        fields: {
            message: {
                type: GraphQLString,
                resolve(){
                    return "Hola Mundo 2";
                }
            },
            curso:{
                type: cursoType,
                resolve(){
                    return { titulo: 'Curso de GraphQl', visitas: 5000 };
                }
            }
        }
    })
});

app.get('/', (req, res) => {
    // res.send('hola mundo');

    // graphql(schema, '{message}')
    // .then( r => res.json(r))
    // .catch(res.json)

    graphql(schema, '{curso {titulo, visitas}}')
    .then( r => res.json(r))
    .catch(res.json)

    
});

app.listen(8080, ()=>{
    console.log('Servidor escuchando en el puerto 8080')
})