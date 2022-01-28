const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

const bookingSchema = new Schema({
  checkInDate: {
    type: Date,
    // get: createdAtVal => dateFormat(createdAtVal),
  },
  checkOutDate: {
    type: Date,
  },
  guest: {
    type: Schema.Types.ObjectId,
    ref: 'Guest',
  },
});

const Booking = model('Booking', bookingSchema);

module.exports = Booking;
