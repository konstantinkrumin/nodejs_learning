const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const users = [];

// /admin/add-user => GET
router.get('/add-user', (req, res, next) => {
  res.render('add-user', { pageTitle: 'Add User', path: '/add-user', formsCSS: true, productCSS: true, activeAddProduct: true });
});

// /add-user => POST
router.post('/add-user', (req, res, next) => {
  users.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.users = users;
