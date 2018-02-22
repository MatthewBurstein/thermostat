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

  $ ('.increase_form').submit(function(e) {
    e.preventDefault();
    $.ajax({
      data: $(this).serialize(),
      success: thermostat.up(this.number)
    })
  })

  function updateModeInformation() {
    $('.mode_information').text(thermostat.displayMode());
  };

  function updateTemperature() {
    $('.number').text(thermostat.temperature)
  }

});
