var Park = function() {
  this.enclosure = [];
  this.twoPlusOffspring = [];
}

Park.prototype = {
  enclosureCount: function() {
    return this.enclosure.length;
  },
  addDinosaur: function(dinosaur) {
    this.enclosure.push(dinosaur);
  },
  removeDinosaurType: function(type) {
    for (i = this.enclosure.length - 1; i >= 0; i--) {
      if (this.enclosure[i].type === type) {
        this.enclosure.splice(i, 1);
      }
    }
  },
  dinoWithMoreThanTwoOffspring: function() {
    for (var dinosaur of this.enclosure) {
      if (dinosaur.numberOfOffspring > 2) {
        this.twoPlusOffspring.push(dinosaur);
      }
    }
  },
  twoPlusOffspringCount: function() {
    return this.twoPlusOffspring.length;
  },
  predictPopulation: function(years) {
    var predictedPopulation = 0;
    for (var dinosaur of this.enclosure) {
      predictedPopulation = dinosaur.numberOfOffspring * years;
    }
    return predictedPopulation + this.enclosureCount();
  }

}



module.exports = Park;
