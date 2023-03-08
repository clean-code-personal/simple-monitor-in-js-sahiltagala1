const lang = require('./language');
const tolerance = 0.05;

function checkRange(val, min, max) {
  if (val < min) {
    return { inRange: false, breachType: "LOW" };
  } else if (val > max) {
    return { inRange: false, breachType: "HIGH" };
  } else {
    return { inRange: true };
  }
}

function checkWarning(val, min, max, tolerance){
  const upperWarningLimit = max - (max * tolerance);
  const lowerWarningLimit = min + (max * tolerance);

  const rangeClassifications = [
    {
      range: val >= min && val <= lowerWarningLimit,
      warningType: "LOW",
      isWarning: true,
    },
    {
      range: val <= max && val >= upperWarningLimit,
      warningType: "HIGH",
      isWarning: true,
    }
  ];

  const matchedClassification = rangeClassifications.find(({ range }) => range);

  return matchedClassification ? matchedClassification : {isWarning:false};

}

function classifyParameters(
  paramName,
  paramVal,
  lowerLimit,
  upperLimit,
  tolerance
) {
  const res_range = checkRange(paramVal, lowerLimit, upperLimit);
  const res_warning = checkWarning(paramVal, lowerLimit, upperLimit, tolerance);
  if (!res_range.inRange) {
    console.log(`${paramName} breach-type: ${res_range.breachType}`);
    return res_range.inRange;
  } else if(res_warning.isWarning){
    console.log(`${paramName} warning-type: ${res_warning.warningType}`);
    return true;
  } else{
    console.log(`${paramName} is Normal`);
    return true;
  }


}

function check(parameters) {
  return parameters;
}

function batteryIsOk(temperature, soc, chargeRate) {
  let temperatureValue = classifyParameters(
    "Temperature",
    temperature,
    0,
    45,
    tolerance
  );
  let socValue = classifyParameters("SOC", soc, 20, 80, tolerance);
  let chargeRateValue = classifyParameters(
    "Charge Rate",
    chargeRate,
    0,
    0.8,
    tolerance
  );
  const parameters = [temperatureValue, socValue, chargeRateValue];
  let isBatteryOk = parameters.every(check);
  return isBatteryOk;
}

module.exports = { batteryIsOk };
