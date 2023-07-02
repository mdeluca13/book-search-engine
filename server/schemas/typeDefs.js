const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        me: User
    }

    type Mutation {
        login ( email: String!, password: String! ): Auth
        addUser ( username: String!, email: String!, password: String! ): Auth
        saveBook ( input: saveBook! ): User
        removeBook ( bookId: ID! ): User
    }

    type User {
        _id: ID!
        username: String!
        email: String!
        bookCount: int!
        savedBooks: [Book]
    }

    type Book {
        bookId: String
        title: String
        authors: [String]
        description: String
        image: String
        link: String
    }

    Auth {
        token: ID!
        user: User
    }

    input savedBook {
        bookId: String
        title: String
        authors: [String]
        description: String
        image: String
        link: String
    }
`;

module.exports = typeDefs;
