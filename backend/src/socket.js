const WebSocket = require("ws");
const generateTemperature = require("./temperatureService");

const setupWebSocket = (server) => {
  const wss = new WebSocket.Server({ server });

  console.log("✅ WebSocket Server Running...");

  setInterval(async () => {
    const reading = await generateTemperature();

    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(reading));
      }
    });
  }, 2000); // Sends data every 2 seconds
};

module.exports = setupWebSocket;
