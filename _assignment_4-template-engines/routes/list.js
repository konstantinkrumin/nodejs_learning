const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
const addData = require('./add-user');

router.get('/', (req, res, next) => {
  const users = addData.users;
  res.render('list', { users: users, pageTitle: 'Users List', path: '/' });
});

module.exports = router;
