const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {

  var db = {
    saveUser: expect.createSpy()
  };

  app.__set__('db', db);

  it('should call the spy', () => {
    var spy = expect.createSpy();
    spy('Rick', 23);
    expect(spy).toHaveBeenCalledWith('Rick', 23);
  });

  it('should call saveUser', () => {
    var email = 'test@example.com';
    var password = '123abc';
    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});

  });

});
