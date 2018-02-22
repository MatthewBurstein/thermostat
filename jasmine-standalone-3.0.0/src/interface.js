$( document ).ready(function() {
  var thermostat = new Thermostat;

  updateModeInformation()
  updateTemperature()
  $('.energy_usage_information').text(thermostat.energyUsage());

  $('#switch_mode_button').click(function() {
    thermostat.togglePowerSavingMode();
    updateModeInformation();
  });

  $('#reset_button').click(function() {
    thermostat.reset()
    updateTemperature()
  })

  $('.increase_form').submit(function(e) {
    e.preventDefault();
    thermostat.up(parseInt(e.target.number.value))
    updateTemperature()
    thermostat.maxTemperatureAlert()
  })

  $('.decrease_form').submit(function(event) {
    event.preventDefault();
    thermostat.down(parseInt(event.target.number.value))
    updateTemperature()
    thermostat.minTemperatureAlert()
  })

  function updateModeInformation() {
    $('.mode_information').text(thermostat.displayMode());
  };

  function updateTemperature() {
    $('.number').text(thermostat.temperature)
  }

});
