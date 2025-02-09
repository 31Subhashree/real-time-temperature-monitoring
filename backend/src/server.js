require("dotenv").config(); 
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const mongoose = require("mongoose");
const { getTemperatureData, processTemperatureData } = require("./temperatureService");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err);
    process.exit(1);  
  }
};

connectDB();

const sendTemperatureUpdate = async () => {
  try {
    const temperature = await getTemperatureData();
    const processedData = processTemperatureData(temperature);
    io.emit("temperatureUpdate", processedData);
  } catch (error) {
    console.error("Error sending temperature update:", error);
  }
};

// Send updates every 2 seconds
setInterval(sendTemperatureUpdate, 2000);

io.on("connection", (socket) => {
  console.log("Client connected");

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
