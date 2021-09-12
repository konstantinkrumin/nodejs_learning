const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const addData = require('./routes/add-user');
const listRoutes = require('./routes/list');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(addData.routes);
app.use(listRoutes);

app.use((req, res, next) => {
  res.render('404', { pageTitle: 'Page Not Found', path: '' });
});

app.listen(3000);
