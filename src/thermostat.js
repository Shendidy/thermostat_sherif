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


module.exports = Thermostat;
