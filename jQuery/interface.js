$(document).ready(function(){
  var thermo = new Thermostat();

  setDisplay();

  $('#upBtn').click(function(){
    var by = document.getElementById('inputSmall').value;
    console.log(by);
    thermo.up(by);
    document.getElementById('inputSmall').value = null;
    setDisplay();
  });

  function setDisplay(){
    $('#currentTemperature').text(thermo.getCurrentTemperature());
    $('#currentEnergyUsage').text(thermo.ceu());
    setColors();
  }

  function setColors(){
    var ceu = thermo.ceu();
    if (ceu === 'low-usage'){
      $('#currentEnergyUsage').css('background-color', 'green')
    }
    else if (ceu === 'medium-usage'){
      $('#currentEnergyUsage').css('background-color', 'black')
    }
    else {
      $('#currentEnergyUsage').css('background-color', 'red')
    }
  }
});
