function Weather() {};

Weather.prototype.isStormy = function () {
  if (Math.random() < 0.5) {
    return true
  } else {
    return false
  }
}
