var assert = require( "assert" );
var Dinosaur = require("../dinosaur.js");

describe("Dinosaur", function() {

  var dino1;

  beforeEach(function() {
    dino1 = new Dinosaur("Velociraptor", 2);
  });

  it("can get dinosaur type", function() {
    assert.strictEqual("Velociraptor", dino1.type);
  });



});
