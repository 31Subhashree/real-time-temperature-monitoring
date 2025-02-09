const Temperature = require("./models/Temperature");

const getTemperatureData = async () => {
  const temperature = await Temperature.findOne().sort({ timestamp: -1 }).limit(1);
  return temperature;
};

const processTemperatureData = (temperature) => {
  if (!temperature) return { message: "No temperature data found" };

  let status = "NORMAL";
  if (temperature.value > process.env.TEMP_THRESHOLD) {
    status = "HIGH";
  }

  return {
    value: temperature.value,
    timestamp: temperature.timestamp,
    status,
  };
};

module.exports = { getTemperatureData, processTemperatureData };
