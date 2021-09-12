const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
const addData = require('./add');

router.get('/', (req, res, next) => {
  const users = addData.users;
  res.render('list', { users: users, pageTitle: 'Users List', path: '/', hasProducts: products.length > 0, activeShop: true, productCSS: true });
});

module.exports = router;
