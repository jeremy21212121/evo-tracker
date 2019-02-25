const mongoose = require('mongoose');

const evoRecord = mongoose.Schema({
  date: Date,
  cars: [carSchema]
},{
  timestamps: true
});

const carSchema = mongoose.Schema({
  plate: String,
  vin: String,
  fuel: Number,
  lat: Number,
  lon: Number,
  address: String
});

module.exports = mongoose.model('EvoRecord', evoRecord);
