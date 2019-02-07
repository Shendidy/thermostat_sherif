function Thermostat(temp){
  this.temprature = temp || 20;
}

Thermostat.prototype.up = function(by){
  this.temprature += by || 1;
}

Thermostat.prototype.down = function(by){
  this.temprature -= by || 1;
  if (this.temprature < 10){this.temprature = 10;}
}


module.exports = Thermostat;
