'use strict';

// var Thermostat = require('../src/thermostat');

describe('Checking if', function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('thermostat starts at 20 degrees', function(){
    expect(thermostat.getCurrentTemperature()).toEqual (20);
  });

  it('up function increases temp by 1', function(){
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual (21);
  });

  it('up function increases temp by given value', function(){
    thermostat.up(3);
    expect(thermostat.getCurrentTemperature()).toEqual (23);
  });

  it('down function decreases temp by 1', function(){
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual (19);
  });

  it('up function decreases temp by given value', function(){
    thermostat.down(3);
    expect(thermostat.getCurrentTemperature()).toEqual (17);
  });

  it('minimum temperature is 10', function(){
    thermostat.down(11);
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('power_saving_mode is on', function(){
    expect(thermostat.getCurrentPowerSavingMode()).toEqual(true);
  });

  it('max temperature if power_saving_mode on is 25', function(){
    thermostat.up(15);
    expect(thermostat.getCurrentTemperature()).toEqual(25);
  });

  it('max temperature if power_saving_mode off is 32', function(){
    thermostat.psmSwitch();
    thermostat.up(15);
    expect(thermostat.getCurrentTemperature()).toEqual(32);
  });

  it('reduces temperature to 25 if it was higher then power saving mode is turned on', function(){
    thermostat.psmSwitch();
    expect(thermostat.getCurrentPowerSavingMode()).toEqual(false);
    thermostat.up(10);
    expect(thermostat.getCurrentTemperature()).toEqual(30);
    thermostat.psmSwitch();
    expect(thermostat.getCurrentPowerSavingMode()).toEqual(true);
    expect(thermostat.getCurrentTemperature()).toEqual(25);
  });

  it('set temperature to 20 by using the reset function', function(){
    thermostat.up(30);
    thermostat.reset();
    expect(thermostat.getCurrentTemperature()).toEqual (20);
  });

  it('reset() turns the Power Saving Mode to on', function(){
    thermostat.up(30);
    expect(thermostat.getCurrentTemperature()).toEqual (25);
    thermostat.psmSwitch();
    expect(thermostat.getCurrentPowerSavingMode()).toEqual (false);
    thermostat.reset();
    expect(thermostat.getCurrentTemperature()).toEqual (20);
    expect(thermostat.getCurrentPowerSavingMode()).toEqual (true);
  });

  it ('get current energy usage for less than 18', function(){
    thermostat.down(3);
    expect(thermostat.ceu()).toEqual('low');
  });

  it ('get current energy usage for less than 25', function(){
    thermostat.up(3);
    expect(thermostat.ceu()).toEqual('medium');
  });

  it ('get current energy usage for higher than 24', function(){
    thermostat.up(6);
    expect(thermostat.ceu()).toEqual('high');
  });

  it ('switch the power saving mode on and off', function(){
    expect(thermostat.getCurrentPowerSavingMode()).toEqual(true);
    thermostat.psmSwitch();
    expect(thermostat.getCurrentPowerSavingMode()).toEqual(false);
    thermostat.psmSwitch();
    expect(thermostat.getCurrentPowerSavingMode()).toEqual(true);
  });
});
