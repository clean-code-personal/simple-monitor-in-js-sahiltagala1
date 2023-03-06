function checkRange(val, min, max) {
  if (val < min) {
    return { inRange: false, breachType: "low" };
  } else if (val > max) {
    return { inRange: false, breachType: "high" };
  } else {
    return { inRange: true, breachType: "Not Breached" };
  }
}

function checkTemperatureRange(temperature) {
  const res = checkRange(temperature, 0, 45);
  console.log(`Temperature Breach-type: ${res.breachType}`);
  return res;
}
function checkSocRange(soc) {
  const res = checkRange(soc, 20, 80);
  console.log(`SOC Breach-type: ${res.breachType}`);
  return res;
}
function checkChargeRateRange(charge_rate) {
  const res = checkRange(charge_rate, 0, 0.8);
  console.log(`Charge Rate Breach-type: ${res.breachType}`);
  return res;
}

function check(parameters) {
  return parameters;
}

function batteryIsOk(temperature, soc, charge_rate) {
  let temperatureValue = checkTemperatureRange(temperature);
  let socValue = checkSocRange(soc);
  let chargeRateValue = checkChargeRateRange(charge_rate);
  const parameters = [
    temperatureValue.inRange,
    socValue.inRange,
    chargeRateValue.inRange,
  ];
  let isBatteryOk = parameters.every(check);
  return isBatteryOk;
}

module.exports = { batteryIsOk, checkRange };
