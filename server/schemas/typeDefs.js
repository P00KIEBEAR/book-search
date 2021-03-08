const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  username: String
  email: String
  bookCount: Int 
  savedBooks: [Book]
}
  type Book {
    author: String
    description: String
    _id: ID
    image: String
    link: String
    title: String
      }
input BookInput {
  bookId: ID!
  author: [String!]!
  description: String!
  title: String!
  image: String!
  link: String!
}
type Auth{
  _id: ID
  token: String
  user: User
}
type Query {
  me: User
}
type Mutation {
  login(email: String, password: String!): Auth
  
}
  # type Query {
  #   books: [Book]
  #   book(title: String!): Book
  # }

  # type Mutation {
  #   addBook(title: String!, author: String!, pages: Int!): Book
  # }
`;

module.exports = typeDefs;
