function Airport() {
  this.planes = []
};

Airport.prototype.land = function(plane) {
  plane.land();
  this.planes.push(plane);
};

Airport.prototype.takeOff = function(plane) {
  console.log('inside takeoff ', this)
  this._isStormy(new Weather);
  if (this.planes.length === 0) {
    throw "No planes in airport"
  }
  else {
    for (var num = this.planes.length; num--;) {
      if (this.planes[num] === plane) {
        plane.takeOff()
        return this.planes.splice(num, 1)[0]
      };
    };
  };
};

Airport.prototype._isStormy = function(weather) {
  if (weather.isStormy()) {
    throw "Too stormy to fly"
  }
}
