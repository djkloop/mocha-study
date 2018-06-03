const add = require('../calc.js').add;
const expect = require('chai').expect;

describe('calc - test', () => {
  it('calc - add - module - 0 + 0', () => {
    expect(add(0 , 0)).to.be.equal(0)
  })

  it('calc - add - module - 0 + 1', () => {
    expect(add(0 , 1)).to.be.equal(1)
  })
});
