'use strict';

var Thermostat = require('../src/thermostat');

describe('Checking if', function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('thermostat starts at 20 degrees', function(){
    expect(thermostat.temprature).toEqual (20);
  });

  it('up function increases temp by 1', function(){
    thermostat.up();
    expect(thermostat.temprature).toEqual (21);
  });

  it('up function increases temp by given value', function(){
    thermostat.up(3);
    expect(thermostat.temprature).toEqual (23);
  });

  it('down function decreases temp by 1', function(){
    thermostat.down();
    expect(thermostat.temprature).toEqual (19);
  });

  it('up function decreases temp by given value', function(){
    thermostat.down(3);
    expect(thermostat.temprature).toEqual (17);
  });

  it('minimum temprature is 10', function(){
    thermostat.down(11);
    expect(thermostat.temprature).toEqual(10);
  });

  it('power_saving_mode is on', function(){
    expect(thermostat.power_saving_mode).toEqual(true);
  });

  it('max temprature if power_saving_mode on is 25', function(){
    thermostat.up(15);
    expect(thermostat.temprature).toEqual(25);
  });

  it('max temprature if power_saving_mode off is 32', function(){
    thermostat.power_saving_mode = false;
    thermostat.up(15);
    expect(thermostat.temprature).toEqual(32);
  });

  it('set temprature to 20 by using the reset function', function(){
    thermostat.up(30);
    thermostat.reset();
    expect(thermostat.temprature).toEqual (20);
  });

  it ('get current energy usage for less than 18', function(){
    thermostat.down(3);
    expect(thermostat.ceu()).toEqual('low-usage');
  });

  it ('get current energy usage for less than 25', function(){
    thermostat.up(3);
    expect(thermostat.ceu()).toEqual('medium-usage');
  });

  it ('get current energy usage for higher than 24', function(){
    thermostat.up(6);
    expect(thermostat.ceu()).toEqual('high-usage');
  });

  it ('switch the power saving mode on and off', function(){
    thermostat.psm_switch();
    expect(thermostat.power_saving_mode).toEqual(false);
  });
});
