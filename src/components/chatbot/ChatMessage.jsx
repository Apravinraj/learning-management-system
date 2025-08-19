import React from "react";
import ChartBubble from "./ChartBubble";

function ChatMessage({ message }) {
  if (message.chartData) {
    return <ChartBubble data={message.chartData} />;
  }

  return (
    <div
      style={{
        margin: "5px 0",
        textAlign: message.type === "user" ? "right" : "left"
      }}
    >
      <span
        style={{
          display: "inline-block",
          padding: "8px 12px",
          borderRadius: "15px",
          background: message.type === "user" ? "#007bff" : "#f1f1f1",
          color: message.type === "user" ? "#fff" : "#000"
        }}
      >
        {message.text}
      </span>
    </div>
  );
}

export default ChatMessage;
