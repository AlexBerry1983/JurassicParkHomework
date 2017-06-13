var assert = require( 'assert' );
var Park = require( '../park.js' );

describe("Park", function() {

  var jpark

  beforeEach(function() {
    jpark = new Park()
  });

  it("check enclosure starts empty", function() {
    assert.strictEqual(0, jpark.enclosureCount());
  })



});
