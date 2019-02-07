function Thermostat(temp){
  this.temprature = temp || 20;
}

Thermostat.prototype.up = function(by){
  this.temprature += by || 1;
}


module.exports = Thermostat;
