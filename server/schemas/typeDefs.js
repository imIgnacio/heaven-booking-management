const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Room {
    _id: ID!
    name: String!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    rooms: [Room]
    guests: [Guest]
  }

  type Guest {
    _id: ID!
    firstName: String!
    lastName: String!
    phone: Int!
    email: String!
  }

  type Query {
    room: [Room]
    guest: [Guest]
    user: [User]
    users(_id: String): [User]
    guests(_id: String): [Guest]
    rooms(_id: String): [Room]
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
    createGuest(firstName: String!, lastName: String!, phone: Int!, email: String!): Guest
    createRoom(name: String!, maxGuests: Int!, price: Int!): Room
  }
`;

module.exports = typeDefs;
