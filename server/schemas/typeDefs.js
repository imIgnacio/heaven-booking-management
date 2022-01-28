const { gql } = require('apollo-server-express');

const typeDefs = gql`

  scalar Date

  type Room {
    _id: ID!
    name: String!
    maxGuests: Int!
    price: Int!
    isEmpty: Boolean!
    bookings: [Booking]
  }

  type Booking {
    _id: ID!
    checkInDate: Date!
    checkOutDate: Date!
    guest: String!
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
    phone: String!
    email: String!
  }

  type Query {
    room: [Room]
    guest: [Guest]
    user: [User]
    booking: [Booking]
    users(_id: String): [User]
    guests(_id: String): [Guest]
    rooms(_id: String): [Room]
    bookings(_id: String): [Booking]
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
    createGuest(firstName: String!, lastName: String!, phone: String!, email: String!): Guest
    createRoom(name: String!, maxGuests: Int!, price: Int!): Room
    createBooking(checkInDate: String, checkOutDate: String, guest: String): Booking
    updateBooking(_id: String!, checkInDate: Date, checkOutDate: Date, guest: String): Booking
  }
`;

module.exports = typeDefs;
