function Thermostat() {
  this._minTemperature = 10
  this.temperature = 20
  this.powerSavingModeOn = true
  this.maxTemperature = this.powerSavingModeOn ? 25 : 32
};

Thermostat.prototype.up = function(number) {
  if (this.temperature + number > this.maxTemperature) {
    this.temperature = this.maxTemperature
  } else {
    this.temperature += number
  }
}

Thermostat.prototype.down = function(number) {
  if (this.temperature - number <  this._minTemperature) {
    this.temperature = this._minTemperature
  } else {
    this.temperature -= number
  }
}

Thermostat.prototype.togglePowerSavingMode = function() {
  this.powerSavingModeOn = !this.powerSavingModeOn
  this._setMaxTemperature()
}

Thermostat.prototype._setMaxTemperature = function() {
  this.maxTemperature = this.powerSavingModeOn ? 25 : 32
}

Thermostat.prototype.reset = function() {
  this.temperature = 20
}

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < 18) {
    return "low-usage"
  } else if (this.temperature < 25) {
    return "medium-usage"
  } else {
    return "high-usage"
  }
}

Thermostat.prototype.displayMode = function() {
  if (this.powerSavingModeOn) {return 'Power Saving Mode'}
  else {return 'Conventional Mode'}
}

Thermostat.prototype.maxTemperatureAlert = function() {
  if(this.temperature === this.maxTemperature) {
    alert("Maximum temperature reached")
  }
}

Thermostat.prototype.minTemperatureAlert = function() {
  if(this.temperature === this._minTemperature) {
    alert("Minimum temperature reached")
  }
}
