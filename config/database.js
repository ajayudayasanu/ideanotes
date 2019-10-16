if (process.env.NODE_ENV === 'production') {
  module.exports = {
    mongoURI: 'mongodb://ideas_DB_user:ajaymongodb123@cluster0-xzxm7.mongodb.net'
  };
} else {
  module.exports = { mongoURI: 'mongodb://localhost/vidjot-dev' };
}
