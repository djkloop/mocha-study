const expect = require('chai').expect;

describe('异步', () => {
  it('setTimeout 2s 异步测试', (done) => {
    let flag = true;
    const testFunc = () => {
      flag = false;
      expect(flag).to.be.not.ok;
      done();
    }

    setTimeout(testFunc, 2000);
    console.log('testing')
  })
})