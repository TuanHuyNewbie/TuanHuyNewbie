require('dotenv').config();
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const user = new Schema({
  address: {required: true, type: String},
});

module.exports = mongoose.model('user', user); 