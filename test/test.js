const { expect } = require("chai");
const { it } = require("mocha");
const { batteryIsOk } = require("../bms-monitor");

describe("Test cases to check Battery", function () {
  it("Temperature is high", function () {
    const result = batteryIsOk(50, 70, 0.7);
    expect(result).equal(false);
  });
  it("Temperature is low", function () {
    const result = batteryIsOk(-5, 70, 0.7);
    expect(result).equal(false);
  });
  it("State of charge is low", function () {
    const result = batteryIsOk(25, 10, 0.7);
    expect(result).equal(false);
  });
  it("State of charge is high", function () {
    const result = batteryIsOk(25, 90, 0.7);
    expect(result).equal(false);
  });
  it("Charge rate is low", function () {
    const result = batteryIsOk(25, 70, -0.1);
    expect(result).equal(false);
  });
  it("Charge rate is high", function () {
    const result = batteryIsOk(25, 70, 0.9);
    expect(result).equal(false);
  });
  it("All parameters are OK", function () {
    const result = batteryIsOk(25, 70, 0.7);
    expect(result).equal(true);
  });
  it("Random false parameters", function () {
    const result = batteryIsOk(50, 80, 0);
    expect(result).equal(false);
  });
});
