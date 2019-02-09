$(document).ready(function(){
  var thermo = new Thermostat();

  start();

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
    $('#customSwitch1').prop('checked', true);
    setDisplay();
  });

  $('#customSwitch1').click(function(){
    thermo.psmSwitch();
    setDisplay();
  });

  // This line was written just before trying AJAX!!!
  function start(){
    $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      thermo._temperature = data.main.temp;
      $('#currentTemperature').text(thermo.getCurrentTemperature());
      $('#currentEnergyUsage').text(thermo.ceu());
      setColors();
    });
  }

  function setDisplay(){
    $('#currentTemperature').text(thermo.getCurrentTemperature());
    $('#currentEnergyUsage').text(thermo.ceu());
    setColors();
  }

  function setColors(){
    var ceu = thermo.ceu();
    if (ceu === 'low'){
      $('#currentEnergyUsage').css('background-color', 'green')
    }
    else if (ceu === 'medium'){
      $('#currentEnergyUsage').css('background-color', 'black')
    }
    else {
      $('#currentEnergyUsage').css('background-color', 'red')
    }
  }
});
