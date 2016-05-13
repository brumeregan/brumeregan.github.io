// var app = require('../src/pow.js');

describe("Pow test", function() {
  it("pow(2, 10)", function() {
    expect(app.pow(2, 10)).toBe(1024);
  });
  it("pow(10, 2", function(){
  	expect(app.pow(10, 2)).toBe(100);
  });
  it("pow(10003232, 0)", function(){
  	expect(app.pow(10003232, 0)).toBe(1);
  });
  it("pow(23, 1)", function(){
  	expect(app.pow(23, 1)).toBe(23);
  });
  it("pow(2, 9)", function(){
  	expect(app.pow(2, 9)).toBe(512);
  });
});