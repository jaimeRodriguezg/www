module.exports = 
`
    tpye Usuario {
        id: ID!
        email: String!
        pass: String!
        token: String,
    }

    input UsuarioInput {
        email: String!
        pass: String!
        token: String,
    }

    extends type Query {
        getUsuarios: [Usuario]
        getUsuario(id: ID!): Usuario
    }

    extend type Mutation {
        registrar(input: UsuarioInput): Usuario
        logIn(input: UsuarioInput): Usuario
        salir: Alert
    }
`