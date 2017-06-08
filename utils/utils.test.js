const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(33, 11);

      expect(res).toBe(44).toBeA('number');
      // if (res !== 44) {
      //   throw new Error(`expected: 44, actually got: ${res}.`)
      // }
    });

    it('should async add two numbers', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
      });
    });
  });

describe('#square', () => {
  it('should square a number', () => {
    var square = utils.square(7);

    expect(square).toBe(49).toBeA('number');
    // if (square !== 49) {
    //   throw new Error(`expected: 49, actuall got ${square}.`)
    // }
  });

  it('should async square a number', (done) => {
    utils.asyncSquare(7, (result) => {
      expect(result).toBe(49).toBeA('number');
      done();
    });
  });

});

});



// it('should expect some values', () => {
//   // expect(12).toNotBe(12);
//   // expect({name: 'Rick'}).toBe({name: 'Rick'});
//   expect([2,3,4]).toInclude(4);
// });

it('should verify first and last names are set', () => {
  var user = {
    age: 25,
    location: 'Philadelphia'
  };
  var result = utils.setName(user, 'Rick Sanchez');

  expect(user).toEqual(result);

  expect(result).toInclude({firstName: 'Rick', lastName: 'Sanchez'});

});
