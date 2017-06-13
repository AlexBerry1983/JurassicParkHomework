var Park = function() {
  this.enclosure = [];
}

Park.prototype = {
  enclosureCount: function() {
    return this.enclosure.length;
  },
  addDinosaur: function(dinosaur) {
    this.enclosure.push(dinosaur);
  },
}



module.exports = Park;
