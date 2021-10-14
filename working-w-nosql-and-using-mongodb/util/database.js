const DATABASE_PASSWORD = require('../config/database_password');

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(`mongodb+srv://costa:${DATABASE_PASSWORD}@cluster0.zk7do.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
    .then((client) => {
      console.log('Connected to MongoDB');
      callback(client);
    })
    .catch((err) => console.log(err));
};

module.exports = mongoConnect;
