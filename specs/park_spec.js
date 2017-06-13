var assert = require( 'assert' );
var Park = require( '../park.js' );
var Dinosaur = require( "../dinosaur.js" );

describe("Park", function() {

  var jpark;
  var dino;

  beforeEach(function() {
    jpark = new Park();
    dino = new Dinosaur("Velociraptor", 2);
  });

  it("check enclosure starts empty", function() {
    assert.strictEqual(0, jpark.enclosureCount());
  });

  it("check can add dinosaur", function() {
    jpark.addDinosaur(dino);
    assert.strictEqual(1, jpark.enclosureCount());
  });



});
