const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  // const isLoggedIn = req.get('Cookie').split(';')[0].trim().split('=')[1] === 'true';
  const isLoggedIn = req.session.isLoggedIn;

  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: isLoggedIn,
  });
};

exports.postLogin = (req, res, next) => {
  // res.setHeader('Set-Cookie', 'loggedIn=true');
  User.findById('616d546cacadbd4b88960d69')
    .then((user) => {
      req.session.user = user;
      req.session.isLoggedIn = true;
      req.session.save((err) => {
        console.log(err);
        res.redirect('/');
      });
    })
    .catch((err) => console.log(err));
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect('/');
  });
};
