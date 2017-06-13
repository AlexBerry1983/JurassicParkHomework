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
  // removeDinosaurType: function (searchedForType) {
  //   for (var dinosaur of this.enclosure) {
  //     if (dinosaur.type === searchedForType) {
  //       var index = this.enclosure.indexOf(dinosaur);
  //       this.enclosure.splice(index, 1);
  //     }
  //   }
  // },
  // removeDinosaurType: function(typeForRemoval) {
  //  var indicesToRemove = new Array();
  // ​
  //  for (var i = 0; i < this.enclosure.length; i++){
  //    if(this.enclosure[i].type === typeForRemoval) {
  //      indicesToRemove.push(i);
  //    }
  //  }
  //  for (var j = indicesToRemove.length -1; j >= 0; j--){
  //    this.enclosure.splice(indicesToRemove[j],1);
  //  }
  // },
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
  // oneYearLater: function() {
  //   for (dinosaur of this.enclosure) {
  //     var newNumOfDinos += dinosaur.numberOfOffspring;
  //   }
  //   return newNumOfDinos + enclosureCount();
  // }

}



module.exports = Park;
