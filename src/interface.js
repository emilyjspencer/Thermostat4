 

$(document).ready(function() {
    var thermostat = new Thermostat();

    updateTemperature(); 

    $("#plus").on("click", function() {
        thermostat.increase();
        updateTemperature();
    });
 
   // $("#current-temp-display").text(thermostat.currentTemperature); // displays the current temperature  
    $("#minus").on("click", function() { 
        thermostat.decrease();
        updateTemperature();
    });

    //$("#current-temp-display").text(thermostat.currentTemperature);
    $("#reset").on("click", function() {
        thermostat.reset();
        updateTemperature();
    });

    //$("#current-temp-display").text(thermostat.currentTemperature);
    $("#powersaving-on").on("click", function() {
        thermostat.switchPowerSavingModeOn();
        $("#power-saving-status").text("on");
        updateTemperature();
    });

    //$("#current-temp-display").text(thermostat.currentTemperature);
    $("#powersaving-off").on("click", function() { // callback
        thermostat.switchPowerSavingModeOff();
        $("#power-saving-status").text("off");
        updateTemperature();
    });

  

    function updateTemperature() {
        $("#current-temp-display").text(thermostat.currentTemperature);
        $("#current-temp-display").attr('class', thermostat.currentEnergyUsage());
      
    }

    $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=1f33b6db9528f1c6021bfffc155c4b7f&units=metric', function(data) {
    $('#london-current-temperature').text(data.main.temp);
    })

    $('#select-city').submit(function(event) {
        event.preventDefault();
        var city = $('#current-city').val();
        $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
          $('#current-temperature').text(data.main.temp);
        })
      })

     

const myRand = () => {
  let r = 50
  while (40 < r && r < 60) {
    r = Math.random() * 100
  }
  return r
}

for (let i = 0; i < 50; i++) {
  const delay = Math.random() + 's';
  const el = document.createElement('img')
  
  el.style.top      = myRand() + '%'
  el.style.left     = myRand() + '%'
  el.style.animationDelay       = delay
  el.style.msAnimationDelay     = delay
  el.style.webkitAnimationDelay = delay
  el.style.monAnimationDelay    = delay
  app.appendChild(el)
}

});