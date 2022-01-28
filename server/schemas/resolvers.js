const { User, Room, Guest } = require('../models');

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
      const booking = await Room.create(args);
      return booking;
    },
    updateRoom: async (parent, { _id, techNum }) => {
      const vote = await Matchup.findOneAndUpdate(
        { _id },
        { $inc: { [`tech${techNum}_votes`]: 1 } },
        { new: true }
      );
      return vote;
    },
  },
};

module.exports = resolvers;
