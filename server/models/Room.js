const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const roomSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  maxGuests: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 1,
  },
  isEmpty: {
    type: Boolean,
    required: true,
  },
  checkInDate: {
    type: Date,
    get: createdAtVal => dateFormat(createdAtVal),
  },
  checkOutDate: {
    type: Date,
    get: createdAtVal => dateFormat(createdAtVal),
  },
  guest: {
    type: Schema.Types.ObjectId,
    ref: 'Guest',
  },
},
{
  toJSON: {
    getters: true,
  },
});

const Room = model('Room', roomSchema);

module.exports = Room;
