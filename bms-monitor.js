function checkRange(val, min, max){
    if(val<min){
        return {outOfRange: true, breachType:"low"};
    } else if(val>max){
        return { outOfRange: true, breachType: "high" };
    } else{
        return {outOfRange: false};
    }
}

function checkTemperatureRange(temperature){
    return checkRange(temperature, 0, 45);
}
function checkSocRange(soc){
    return checkRange(soc, 20, 80);
}
function checkChargeRateRange(charge_rate){
    return checkRange(charge_rate, 0, 0.8);
}

function batteryIsOk(temperature, soc, charge_rate){
    let isBatteryOk = true;

    const checkTemperature = checkTemperatureRange(temperature);
    if(checkTemperature.outOfRange){
        console.log(`Temperature is ${checkTemperature.breachType} !!`);
        isBatteryOk = false;
    }

    const checkSoc = checkSocRange(soc);
    if(checkSoc.outOfRange){
        console.log(`State of charge is ${checkSoc.breachType} !!`);
        isBatteryOk = false;
    }

    const checkChargeRate = checkChargeRateRange(charge_rate);
    if(checkChargeRate.outOfRange){
        console.log(`Charge rate is ${checkChargeRate.breachType} !!`);
        isBatteryOk = false;
    }

    if(isBatteryOk){
        console.log("Battery is OK!")
    }
    return isBatteryOk;

}

module.exports = {batteryIsOk};
