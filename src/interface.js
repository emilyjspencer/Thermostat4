 

$(document).ready(function() {
    var thermostat = new Thermostat();

    

    updateTemperature(); // to see it for the first time 

    $("#plus").on("click", function() {
        thermostat.increase();
        updateTemperature();
    });
 
   // $("#current-temp-display").text(thermostat.currentTemperature); // displays the current temperature  
    $("#minus").on("click", function() { // when we click the minus button - the temperture will decrease and the temperature will be displayed 
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
        $("#current-temp-display").text(thermostat.currentTemperature); // display current temperature 
        $("#current-temp-display").attr('class', thermostat.currentEnergyUsage());
        //if (thermostat.currentEnergyUsage() === "low") {
          //  $("current-temp-display").css("color", "green");
        //} else if (thermostat.currentEnergyUsage() === "medium") {
         //   $("current-temp-display").css("color", "black");
        //} else {
         //   $("current-temp-display").css("color", "red");
        //}
    }

    $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=1f33b6db9528f1c6021bfffc155c4b7f&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
})

});