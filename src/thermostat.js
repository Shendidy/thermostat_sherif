'use strickt';

function Thermostat(temp){
  this._DEFAULT_TEMPERATURE = 20;
  this._temperature = temp || this._DEFAULT_TEMPERATURE;
  this._power_saving_mode = true;
  this._MINIMUM_TEMPERATURE = 10;
  this._MAXIMUM_SAVING_TEMPERATURE = 25;
  this._MAXIMUM_NONE_SAVING_TEMPERATURE = 32;
  this._LOW_ENERGY_USAGE = 18;
  this._MEDIUM_ENERGY_USAGE = 24;
  this._HIGH_ENERGY_USAGE = 25;
}

Thermostat.prototype.up = function(by){
  this._temperature += parseInt(by) || 1;
  if(this._power_saving_mode){
    if(this._temperature > this._MAXIMUM_SAVING_TEMPERATURE){this._temperature = this._MAXIMUM_SAVING_TEMPERATURE;}
  }
  else{
    if(this._temperature > this._MAXIMUM_NONE_SAVING_TEMPERATURE){this._temperature = this._MAXIMUM_NONE_SAVING_TEMPERATURE;}
  }
}

Thermostat.prototype.down = function(by){
  this._temperature -= by || 1;
  if (this._temperature < this._MINIMUM_TEMPERATURE){this._temperature = this._MINIMUM_TEMPERATURE;}
}

Thermostat.prototype.reset = function(){
  this._temperature = this._DEFAULT_TEMPERATURE;
  this._power_saving_mode = true;
}

Thermostat.prototype.ceu = function(){
  var temp = this._temperature;
  return  temp < this._LOW_ENERGY_USAGE ? "low-usage" : temp <= this._MEDIUM_ENERGY_USAGE ? "medium-usage" : "high-usage";
}

Thermostat.prototype.psmSwitch = function(){
  this._power_saving_mode = !this._power_saving_mode;
}

Thermostat.prototype.getCurrentTemperature = function (){
  return this._temperature;
}

Thermostat.prototype.getCurrentPowerSavingMode = function(){
  return this._power_saving_mode;
}

module.exports = Thermostat;
