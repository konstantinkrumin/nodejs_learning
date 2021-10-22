const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  const isLoggedIn = req.session.isLoggedIn;

  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: isLoggedIn,
  });
};

exports.postLogin = (req, res, next) => {
  User.findById('616d546cacadbd4b88960d69')
    .then((user) => {
      req.session.user = user;
      req.session.isLoggedIn = true;
      res.redirect('/');
    })
    .catch((err) => console.log(err));
};
