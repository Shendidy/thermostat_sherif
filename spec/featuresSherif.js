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
});
