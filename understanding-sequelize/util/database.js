const DATABASE_PASSWORD = require('../config/database_password');

const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'node-complete',
  password: DATABASE_PASSWORD,
});

module.exports = pool.promise();
