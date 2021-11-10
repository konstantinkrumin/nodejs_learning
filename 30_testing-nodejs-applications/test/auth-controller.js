const expect = require('chai').expect;
const sinon = require('sinon');
const mongoose = require('mongoose');

const User = require('../models/user');
const AuthController = require('../controllers/auth');

const DATABASE_PASSWORD = require('../config/database_password');
const MONGODB_TEST_URI = `mongodb+srv://admin:${DATABASE_PASSWORD}@cluster0.wbnis.mongodb.net/test-messages?retryWrites=true&w=majority`;

describe('Auth Controller - Login', (done) => {
  it('should throw an error with code 500 if accesing the database fails', () => {
    sinon.stub(User, 'findOne');
    User.findOne.throws();

    const req = {
      body: {
        email: 'test@test.com',
        password: 'tester',
      },
    };

    AuthController.login(req, {}, () => {}).then((result) => {
      expect(result).to.be.an('error');
      expect(result).to.have.property('statusCode', 500);
      done();
    });

    User.findOne.restore();
  });

  it('should send a response with a valid user status for an existing user', (done) => {
    mongoose
      .connect(MONGODB_TEST_URI)
      .then(() => {
        const user = new User({
          _id: '5c0f66b979af55031b34728a',
          email: 'test@test.com',
          password: 'tester',
          name: 'test',
          posts: [],
        });

        return user.save();
      })
      .then(() => {
        const req = { userId: '5c0f66b979af55031b34728a' };
        const res = {
          statusCode: 500,
          userStatus: null,
          status: (code) => {
            this.statusCode = code;
            return this;
          },
          json: (data) => {
            this.userStatus = data.status;
          },
        };

        AuthController.getUserStatus(req, res, () => {}).then(() => {
          expect(res.statusCode).to.be.equal(200);
          expect(res.userStatus).to.be.equal('I am new!');
          User.deleteMany({})
            .then(() => {
              return mongoose.disconnect();
            })
            .then(() => {
              done();
            });
        });
      })
      .catch((err) => console.log(err));
  });
});
