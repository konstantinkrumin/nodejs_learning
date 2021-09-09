const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('First middleware applied');
  next();
});

app.use((req, res, next) => {
  console.log('Second middleware applied');
  next();
});

app.use('/users', (req, res, next) => {
  console.log('opened users page');
  return res.send('<h1>Hello from the Users page</h1>');
});

app.use('/', (req, res, next) => {
  console.log('opened main page');
  return res.send('<h1>Hello from the Main Page!</h1>');
});

app.listen(3000);
