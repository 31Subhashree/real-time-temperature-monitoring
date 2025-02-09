const mongoose = require("mongoose");

const TemperatureSchema = new mongoose.Schema({
  value: Number,
  timestamp: { type: Date, default: Date.now },
  status: { type: String, enum: ["NORMAL", "HIGH"] },
});

module.exports = mongoose.model("Temperature", TemperatureSchema);
