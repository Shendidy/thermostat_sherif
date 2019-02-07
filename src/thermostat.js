'use strickt';

function Thermostat(temp){
  this._DEFAULT_TEMPRATURE = 20;
  this._temprature = temp || this._DEFAULT_TEMPRATURE;
  this._power_saving_mode = true;
  this._MINIMUM_TEMPRATURE = 10;
  this._MAXIMUM_SAVING_TEMPRATURE = 25;
  this._MAXIMUM_NONE_SAVING_TEMPRATURE = 32;
  this._LOW_ENERGY_USAGE = 18;
  this._MEDIUM_ENERGY_USAGE = 24;
  this._HIGH_ENERGY_USAGE = 25;
}

Thermostat.prototype.up = function(by){
  this._temprature += by || 1;
  if(this._power_saving_mode){
    if(this._temprature > this._MAXIMUM_SAVING_TEMPRATURE){this._temprature = this._MAXIMUM_SAVING_TEMPRATURE;}
  }
  else{
    if(this._temprature > this._MAXIMUM_NONE_SAVING_TEMPRATURE){this._temprature = this._MAXIMUM_NONE_SAVING_TEMPRATURE;}
  }
}

Thermostat.prototype.down = function(by){
  this._temprature -= by || 1;
  if (this._temprature < this._MINIMUM_TEMPRATURE){this._temprature = this._MINIMUM_TEMPRATURE;}
}

Thermostat.prototype.reset = function(){
  this._temprature = this._DEFAULT_TEMPRATURE;
}

Thermostat.prototype.ceu = function(){
  var temp = this._temprature;
  return  temp < this._LOW_ENERGY_USAGE ? "low-usage" : temp <= this._MEDIUM_ENERGY_USAGE ? "medium-usage" : "high-usage";
}

Thermostat.prototype.psmSwitch = function(){
  this._power_saving_mode = !this._power_saving_mode;
}

Thermostat.prototype.getCurrentTemprature = function (){
  return this._temprature;
}

Thermostat.prototype.getCurrentPowerSavingMode = function(){
  return this._power_saving_mode;
}

module.exports = Thermostat;
