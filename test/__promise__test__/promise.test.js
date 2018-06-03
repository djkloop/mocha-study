const fetch = require('node-fetch');
const expect = require('chai').expect;
const should = require('chai').should()

describe('异步请求', _ => {
  it('异步请求应该返回一个对象', function() {
    this.timeout(5000);
    return fetch('https://api.github.com')
      .then(function(res) {
        return res.json();
      }).then(function(json) {
        expect(json).to.be.an('object');
      });
  });
})