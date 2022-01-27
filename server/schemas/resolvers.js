const { User, Room, Guest } = require('../models');

const resolvers = {
  Query: {
    user: async () => {
      return User.find({});
    },
    guest: async () => {
      return Guest.find({});
    },
    room: async () => {
      return Room.find({});
    },
    users: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return User.find(params);
    },
    guests: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Guest.find(params);
    },
    rooms: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Room.find(params);
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
    createVote: async (parent, { _id, techNum }) => {
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
