"Hey testing commit"



$(document).ready(function() {
    var thermostat = new Thermostat();
    updateTemperature();
    $("#plus").on("click", function() {
        thermostat.increase();
        updateTemperature();
    });

    $("#current-temp-display").text(thermostat.currentTemperature);
    $("#minus").on("click", function() {
        thermostat.decrease();
        updateTemperature();
    });

    $("#current-temp-display").text(thermostat.currentTemperature);
    $("#reset").on("click", function() {
        thermostat.reset();
        updateTemperature();
    });

    $("#current-temp-display").text(thermostat.currentTemperature);
    $("#powersaving-on").on("click", function() {
        thermostat.switchPowerSavingModeOn();
        $("#power-saving-status").text("on");
        updateTemperature();
    });

    $("#current-temp-display").text(thermostat.currentTemperature);
    $("#powersaving-off").on("click", function() {
        thermostat.switchPowerSavingModeOff();
        $("#power-saving-status").text("off");
        updateTemperature();
    });

    function updateTemperature() {
        $("#current-temp-display").text(thermostat.currentTemperature);
        $("#current-temp-display").attr("class", thermostat.currentEnergyUsage());
        if (thermostat.currentEnergyUsage() === "low") {
            $("current-temp-display").css("color", "green");
        }
    }
});