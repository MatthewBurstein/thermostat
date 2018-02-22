describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
    spyOn(window, 'alert');
  });

  it("is instantiated with 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20)
  });

  it("has minimum temperature of 10 degrees", function() {
    expect(thermostat._minTemperature).toEqual(10)
  })

  it("is instantiated with powerSavingMode on", function() {
    expect(thermostat.powerSavingModeOn).toEqual(true)
  })

  describe(".up()", function() {
    it("raises the temperature by the argument", function() {
      thermostat.up(1)
      expect(thermostat.temperature).toEqual(21)
    });
  });

  describe(".down()", function() {
    it("lowers the temperature by the amount specified", function() {
      thermostat.down(1)
      expect(thermostat.temperature).toEqual(19)
    })

    describe("when it would be reduced below 10", function() {
      it("sets the temperature to 10", function() {
        try {
          thermostat.down(11);
        }
        catch(err) {
          console.log(err)
          expect(thermostat.temperature).toEqual(thermostat._minTemperature)
        }
      })
    })
  })

  describe(".togglePowerSavingMode()", function() {
    it('toggles this.powerSavingMode', function() {
      thermostat.powerSavingModeOn = true
      thermostat.togglePowerSavingMode()
      expect(thermostat.powerSavingModeOn).toEqual(false)
    });

    it("calls _setMaxTemperature", function() {
      spyOn(thermostat, "_setMaxTemperature")
      thermostat.togglePowerSavingMode()
      expect(thermostat._setMaxTemperature).toHaveBeenCalled()
    })
  })

  describe("_setMaxTemperature()",  function() {
    it('is 25 when powerSavingMode is on', function() {
      thermostat.powerSavingModeOn = true
      thermostat._setMaxTemperature()
      expect(thermostat.maxTemperature).toEqual(25)
    })

    it("is 32 when powerSavingMode is off", function() {
      thermostat.powerSavingModeOn = false
      thermostat._setMaxTemperature()
      expect(thermostat.maxTemperature).toEqual(32)
    })
  })

  describe(".reset()", function() {
    it("resets the temperature to the starting value", function() {
      thermostat.up(3)
      thermostat.reset()
      expect(thermostat.temperature).toEqual(20)
    })
  })

  describe(".energyUsage()", function() {
    it("returns 'low-usage' when temperature is less than 18", function() {
      thermostat.temperature = 15
      expect(thermostat.energyUsage()).toEqual('low-usage')
    })
    it("returns 'medium-usage' when temperature is between 18 and 24 inclusive", function() {
      thermostat.temperature = 20
      expect(thermostat.energyUsage()).toEqual('medium-usage')
    })
    it("returns 'high-usage' when temperature is above 24", function() {
      thermostat.temperature = 25
      expect(thermostat.energyUsage()).toEqual('high-usage')
    })
  })

  describe(".displayMode", function() {
    it("returns 'Power Saving mode' when powerSavingModeOn === true", function () {
      expect(thermostat.displayMode()).toEqual('Power Saving Mode')
    })

    it("returns 'Conventional Mode' when powerSavingModeOn === false", function() {
        thermostat.togglePowerSavingMode()
        expect(thermostat.displayMode()).toEqual('Conventional Mode')
    })
  })

  describe("maxTemperatureAlert", function() {
    it("alerts when maximum temperature reached", function(){
      thermostat.up(50)
      thermostat.maxTemperatureAlert()
      expect(window.alert).toHaveBeenCalledWith("Maximum temperature reached")
    })
  })


  describe("minTemperatureAlert", function() {
    it("alerts when minimum temperature reached", function() {
      thermostat.down(50)
      thermostat.minTemperatureAlert()
      expect(window.alert).toHaveBeenCalledWith("Minimum temperature reached")
    })
  })
})
