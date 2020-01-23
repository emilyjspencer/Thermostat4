'use strict';



describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('shows the default temperature of 20', function() {
    expect(thermostat.currentTemperature).toEqual(20)
  });

  it('can increase the temperature with an UP function', function() {
    expect(thermostat.increase()).toEqual(21)
  });

  it('can decrease the temperature with a DOWN function', function() {
    expect(thermostat.decrease()).toEqual(19)
  });

  it('cannot reduce the temperature below the minimum(10)', function() {
    for(let step = 0; step < 10; step++) {thermostat.decrease();}
    expect(thermostat.decrease()).toEqual(10)
  });

  it('has a maximum temperature of 25 when powersaving mode is on', function() {
    thermostat.currentTemperature = 25
    expect(thermostat.increase()).toEqual(25)
  });

  it('has a maximum temperature of 32 when powersaving mode is off', function() {
    thermostat.togglePowerSavingMode();
    thermostat.currentTemperature = 26
    expect(thermostat.increase()).toEqual(27)

    thermostat.currentTemperature = 32
    //////////
    expect(thermostat.increase()).toEqual(32)
  });

  it('resets the current temperature to 20 with a reset function', function() {
    thermostat.increase();
    expect(thermostat.reset()).toEqual(20)
  });

  it('checks whether the usage is low when current temperature is less than 18', function() {
    thermostat.currentTemperature = 12;
    expect(thermostat.currentEnergyUsage()).toEqual("low")
  });

  it('checks whether the usage is low when current temperature is less than 18', function() {
    thermostat.currentTemperature = 20;
    expect(thermostat.currentEnergyUsage()).toEqual("medium")
  });

  it('checks whether the usage is low when current temperature is less than 18', function() {
    thermostat.currentTemperature = 30;
    expect(thermostat.currentEnergyUsage()).toEqual("high")
  });
});