const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/secondary', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'secondaryPage.html'));
});

router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'mainPage.html'));
});

module.exports = router;
