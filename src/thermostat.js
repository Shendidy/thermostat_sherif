'use strickt';

function Thermostat(temp){
  this._temprature = temp || 20;
  this._power_saving_mode = true;
  this._minimum_temprature
}

Thermostat.prototype.up = function(by){
  this._temprature += by || 1;
  if(this._power_saving_mode){
    if(this._temprature > 25){this._temprature = 25;}
  }
  else{
    if(this._temprature > 32){this._temprature = 32;}
  }
}

Thermostat.prototype.down = function(by){
  this._temprature -= by || 1;
  if (this._temprature < 10){this._temprature = 10;}
}

Thermostat.prototype.reset = function(){
  this._temprature = 20;
}

Thermostat.prototype.ceu = function(){
  var temp = this._temprature;
  return  temp < 18 ? "low-usage" : temp < 25 ? "medium-usage" : "high-usage";
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
