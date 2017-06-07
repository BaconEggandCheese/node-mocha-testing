const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);

  if (res !== 44) {
    throw new Error(`expected: 44, actually got: ${res}.`)
  }
});

it('should square a number', () => {
  var square = utils.square(7);

  if (square !== 49) {
    throw new Error(`expected: 49, actuall got ${square}.`)
  }
});
