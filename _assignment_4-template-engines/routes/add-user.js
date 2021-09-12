const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const users = [];

// /add-user => GET
router.get('/add-user', (req, res, next) => {
  res.render('add-user', { pageTitle: 'Add User', path: '/add-user' });
});

// /add-user => POST
router.post('/add-user', (req, res, next) => {
  users.push({ name: req.body.name });
  res.redirect('/');
});

exports.routes = router;
exports.users = users;
