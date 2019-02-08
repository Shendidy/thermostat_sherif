$(document).ready(function(){
  var thermo = new Thermostat();

  setDisplay();

  $('#upBtn').click(function(){
    var by = document.getElementById('inputSmall').value;
    thermo.up(by);
    document.getElementById('inputSmall').value = null;
    setDisplay();
  });

  $('#downBtn').click(function(){
    var by = document.getElementById('inputSmall').value;
    thermo.down(by);
    document.getElementById('inputSmall').value = null;
    setDisplay();
  });

  $('#resetBtn').click(function(){
    thermo.reset();
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
