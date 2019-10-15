if (process.env.NODE_ENV === 'production') {
  module.exports = {
    mongoURI: 'mongodb+srv://ideas_DB_user:ajaymongodb@123@cluster0-xzxm7.mongodb.net/test?retryWrites=true&w=majority'
  };
} else {
  module.exports = { mongoURI: 'mongodb://localhost/vidjot-dev' };
}
