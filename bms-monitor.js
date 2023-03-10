const lang = require("./language");
const convertToCelsius = require("./unitConversion");
const tolerance = 0.05;

function checkRange(val, min, max) {
  if (val < min) {
    return { inRange: false, breachType: lang.low };
  } else if (val > max) {
    return { inRange: false, breachType: lang.high };
  } else {
    return { inRange: true };
  }
}

function checkWarning(val, min, max, tolerance) {
  const upperWarningLimit = max - max * tolerance;
  const lowerWarningLimit = min + max * tolerance;

  const rangeClassifications = [
    {
      range: val <= lowerWarningLimit,
      warningType: lang.low,
      isWarning: true,
    },
    {
      range: val >= upperWarningLimit,
      warningType: lang.high,
      isWarning: true,
    },
  ];

  const matchedClassification = rangeClassifications.find(({ range }) => range);

  return matchedClassification ? matchedClassification : { isWarning: false };
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
    console.log(`${paramName} ${lang.breachType(res_range.breachType)}`);
    return res_range.inRange;
  } else if (res_warning.isWarning) {
    console.log(`${paramName} ${lang.warningType(res_warning.warningType)}`);
    return true;
  } else {
    console.log(`${paramName} ${lang.normal}`);
    return true;
  }
}

function check(parameters) {
  return parameters;
}

function batteryIsOk(temperature, tempUnit, soc, chargeRate) {

  temperature = convertToCelsius(temperature, tempUnit);

  let temperatureValue = classifyParameters(
    lang.temperature,
    temperature,
    0,
    45,
    tolerance
  );
  let socValue = classifyParameters(lang.soc, soc, 20, 80, tolerance);
  let chargeRateValue = classifyParameters(
    lang.chargeRate,
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
