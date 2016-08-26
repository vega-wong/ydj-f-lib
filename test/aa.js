// add.test.js



var expect = require('chai').expect;

var YDJ = require('../dist/YDJ');


function add (a, b) {
  return a + b;
}

describe('加法函数的测试', function() {
  it('1 加 1 应该等于 2', function() {
    expect(add(1, 1)).to.be.equal(2);
  });
});


describe('import', function() {
  it('import as a function', function(){
    expect(YDJ.name).to.be.equal('ydj');
  })
})
