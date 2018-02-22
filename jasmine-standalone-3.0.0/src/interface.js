$( document ).ready(function() {
  var thermostat = new Thermostat;
  $('.mode_information').text(thermostat.displayMode);
  $('.energy_usage_information').text(thermostat.energyUsage);
  $('#switch_mode_button').click(function() {
    thermostat.togglePowerSavingMode();
    updateModeInformation();

  });

  function updateModeInformation() {
    $('.mode_information').text(thermostat.displayMode);
  };

});
