// Importing necessary files
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://174.112.15.206/32/booksDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
