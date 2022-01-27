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
  isEmpty: {
    type: Boolean,
    required: true,
  },
  checkInDate: {
    type: Date,
    required: true,
    get: createdAtVal => dateFormat(createdAtVal),
  },
  checkOutDate: {
    type: Date,
    required: true,
    get: createdAtVal => dateFormat(createdAtVal),
  },
  guest: {
    type: Schema.Types.ObjectId,
    ref: 'Guest',
  },
});

const Room = model('Room', roomSchema);

module.exports = Room;
