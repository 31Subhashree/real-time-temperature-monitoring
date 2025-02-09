import React from "react";

const StatusIndicator = ({ status }) => {
  return (
    <div>
      <h3>Connection Status: {status}</h3>
      <div
        style={{
          width: "20px",
          height: "20px",
          backgroundColor: status === "Connected" ? "green" : "red",
          borderRadius: "50%",
        }}
      />
    </div>
  );
};

export default StatusIndicator;
