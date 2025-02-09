import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import TemperatureChart from "./components/TemperatureChart";

const App = () => {
  const [status, setStatus] = useState("Disconnected");
  const [temperatures, setTemperatures] = useState([]);
  const [currentTemp, setCurrentTemp] = useState({ value: 0, status: "NORMAL" });

  useEffect(() => {
    const socket = socketIOClient("http://localhost:5001");

    socket.on("connect", () => setStatus("Connected"));
    socket.on("disconnect", () => setStatus("Disconnected"));

    socket.on("temperatureUpdate", (data) => {
      setTemperatures((prev) => [data, ...prev].slice(0, 5));  // Keep last 5 readings
      setCurrentTemp(data);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div className="App">
      <h1>Real-Time Temperature Monitoring</h1>
      <p>Status: {status}</p>

      <h2>Current Temperature: {currentTemp.value}°C</h2>
      
      {/* Add status badge here */}
      <p className={`badge ${currentTemp.status}`}>
        {currentTemp.status}
      </p>

      <TemperatureChart temperatures={temperatures} />
    </div>
  );
};

export default App;
