var assert = require( 'assert' );
var Park = require( '../park.js' );
var Dinosaur = require( "../dinosaur.js" );

describe("Park", function() {

  var jpark;
  var dino;
  var dino1;
  var dino2;

  beforeEach(function() {
    jpark = new Park();
    dino = new Dinosaur("Velociraptor", 2);
    dino1 = new Dinosaur("Velociraptor", 1);
    dino2 = new Dinosaur("Triceratops", 3);
    dino3 = new Dinosaur("Tyrannosaurus", 4);
  });

  it("check enclosure starts empty", function() {
    assert.strictEqual(0, jpark.enclosureCount());
  });

  it("check can add dinosaur", function() {
    jpark.addDinosaur(dino);
    assert.strictEqual(1, jpark.enclosureCount());
  });

  it("check can remove all dinosaurs of a specific type", function() {
    jpark.addDinosaur(dino);
    jpark.addDinosaur(dino1);
    jpark.addDinosaur(dino2);
    jpark.removeDinosaurType("Velociraptor");
    assert.strictEqual(1, jpark.enclosureCount());
  });

  it("make a list of all dinosaurs with more than 2 offspring per year", function() {
    jpark.addDinosaur(dino);
    jpark.addDinosaur(dino1);
    jpark.addDinosaur(dino2);
    jpark.dinoWithMoreThanTwoOffspring();
    assert.strictEqual(1, jpark.twoPlusOffspringCount());
  });

  it("double check make a list of all dinosaurs with more than 2 offspring per year", function() {
    jpark.addDinosaur(dino);
    jpark.addDinosaur(dino1);
    jpark.addDinosaur(dino2);
    jpark.addDinosaur(dino3);
    jpark.dinoWithMoreThanTwoOffspring();
    assert.strictEqual(2, jpark.twoPlusOffspringCount());
  });

  it("predict population after one year", function() {
    jpark.addDinosaur(dino);
    assert.strictEqual(3, jpark.predictPopulation(1));
  });

  it("predict population after two years", function() {
    jpark.addDinosaur(dino3);
    assert.strictEqual(9, jpark.predictPopulation(2));
  });

  it("predict population after two years with two dinosaurs", function() {
    jpark.addDinosaur(dino);
    jpark.addDinosaur(dino);
    assert.strictEqual(10, jpark.predictPopulation(2));
  });


});
