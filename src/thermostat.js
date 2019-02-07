'use strickt';

function Thermostat(temp){
  this.temprature = temp || 20;
  this.power_saving_mode = true;
}

Thermostat.prototype.up = function(by){
  this.temprature += by || 1;
  if(this.power_saving_mode){
    if(this.temprature > 25){this.temprature = 25;}
  }
  else{
    if(this.temprature > 32){this.temprature = 32;}
  }
}

Thermostat.prototype.down = function(by){
  this.temprature -= by || 1;
  if (this.temprature < 10){this.temprature = 10;}
}

Thermostat.prototype.reset = function(){
  this.temprature = 20;
}

Thermostat.prototype.ceu = function(){
  var temp = this.temprature;
  return  temp < 18 ? "low-usage" : temp < 25 ? "medium-usage" : "high-usage";
}

Thermostat.prototype.psm_switch = function(){
  this.power_saving_mode = !this.power_saving_mode;
}

Thermostat.prototype.getCurrentTemprature = function (){
  return this.temprature;
}

module.exports = Thermostat;
