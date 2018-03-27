var mocha = require("mocha");
var should = require("should");

mocha.describe("My first test", function() {
    mocha.it("is running", function() {
        should.equal(true, true);
    });
});