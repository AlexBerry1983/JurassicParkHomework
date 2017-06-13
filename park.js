var Park = function() {
  this.enclosure = [];
}

Park.prototype = {
  enclosureCount: function() {
    return this.enclosure.length;
  }
}



module.exports = Park;
