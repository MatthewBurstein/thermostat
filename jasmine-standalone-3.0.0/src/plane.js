function Plane() {
  this.landed = false
};

Plane.prototype.land = function () {
  this.landed = true;
};

Plane.prototype.takeOff = function () {
  this.landed = false;
};
