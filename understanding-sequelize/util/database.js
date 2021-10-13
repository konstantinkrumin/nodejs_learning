const DATABASE_PASSWORD = require('../config/database_password');

const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', DATABASE_PASSWORD, { dialect: 'mysql', host: 'localhost' });

module.exports = sequelize;
