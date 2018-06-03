const moment = require('moment');
const today = require('../../date').today;
const expect = require('chai').expect;

describe('today date', () => {
  it('today func test', () => {
    expect(today()).to.be.equal(moment().format('YYYY-MM-DD'));
  })
})