var expect = chai.expect;

describe('浏览器端测试', function() {
  it('0 + 0 = 0', function() {
    expect(add(0, 0)).to.be.equal(0);
  });

  it('0 + 1 = 1', function() {
    expect(add(0, 1)).to.be.equal(1);
  })
})