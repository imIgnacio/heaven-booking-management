const { User, Room, Guest, Booking } = require('../models');
const { GraphQLScalarType, Kind } = require('graphql');

const resolvers = {

  Query: {
    users: async () => {
      return User.find({});
    },
    guests: async () => {
      return Guest.find({});
    },
    rooms: async () => {
      return Room.find({});
    },
    bookings: async () => {
      return Booking.find({});
    },
    user: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return User.find(params);
    },
    guest: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Guest.find(params);
    },
    room: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Room.find(params);
    },
    booking: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Booking.find(params);
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },
    createGuest: async (parent, args) => {
      const guest = await Guest.create(args);
      return guest;
    },
    createRoom: async (parent, args) => {
      const room = await Room.create(args);
      return room;
    },
    createBooking: async (parent, args) => {
      const checkIn = new Date(args.checkInDate);
      const checkOut = new Date(args.checkOutDate);

      console.log(checkIn, checkOut);

      const booking = await Booking.create({
        checkInDate: checkIn,
        checkOutDate: checkOut,
        guest: args.guest
      });
      return booking;
    },
    updateBooking: async (parent, { _id, checkInDate, checkOutDate, guest_id }) => {
      const booking = await Booking.findOneAndUpdate(
        { _id },
        { checkInDate: { checkIn }, checkOutDate: { checkOut }, guest: { guest_id } },
        { new: true }
      );
      return booking;
    },
  },
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    serialize(value) {
      return value; // Convert outgoing Date to integer for JSON
    },
    parseValue(value) {
      return new Date(value); // Convert incoming integer to Date
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
      }
      return null; // Invalid hard-coded value (not an integer)
    },
  })
};

module.exports = resolvers;
