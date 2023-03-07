function checkRange(val, min, max) {
  if (val < min) {
    return { inRange: false, breachType: "low" };
  } else if (val > max) {
    return { inRange: false, breachType: "high" };
  } else {
    return { inRange: true, breachType: "Not Breached" };
  }
}

function classifyParametersBreach(paramName, paramVal, lowerLimit, upperLimit){
  const res = checkRange(paramVal, lowerLimit, upperLimit);
  console.log(`${paramName} breach-type: ${res.breachType}`);
  return res;
}

function check(parameters) {
  return parameters;
}

function batteryIsOk(temperature, soc, charge_rate) {

  let temperatureValue = classifyParametersBreach("Temperature", temperature, 0, 45);
  let socValue = classifyParametersBreach("SOC", soc, 20, 80);
  let chargeRateValue = classifyParametersBreach("Charge Rate", charge_rate, 0, 0.8);
  const parameters = [temperatureValue.inRange, socValue.inRange, chargeRateValue.inRange];
  let isBatteryOk = parameters.every(check);
  return isBatteryOk;
}

module.exports = { batteryIsOk };
