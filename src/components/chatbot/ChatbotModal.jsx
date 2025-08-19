import React, { useState, useEffect } from "react";
import { qaData } from "../../data/qaData";
import ChatMessage from "./ChatMessage";

function ChatbotModal({ role, onClose }) {
  const [messages, setMessages] = useState([]);

  // 🔥 Reset messages when role changes
  useEffect(() => {
    setMessages([]);
    console.log("Chatbot role switched to:", role);
  }, [role]);

  const handleSend = (text) => {
    setMessages((prev) => [...prev, { type: "user", text }]);

    // normalize role to match qaData keys
    const roleKey = role?.toLowerCase();
    const roleData = qaData[roleKey] || [];

    const match = roleData.find(
      (qa) => qa.q.toLowerCase() === text.toLowerCase()
    );

    if (match) {
      if (match.a === "chart") {
        setMessages((prev) => [
          ...prev,
          { type: "bot", chartData: match.chartData },
        ]);
      } else {
        setMessages((prev) => [...prev, { type: "bot", text: match.a }]);
      }
    } else {
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "Sorry, I don’t understand that yet." },
      ]);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "80px",
        right: "20px",
        width: "350px",
        height: "500px",
        background: "#fff",
        border: "1px solid #ccc",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "10px",
          background: "#007bff",
          color: "#fff",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      >
        Chatbot ({role})
        <button
          onClick={onClose}
          style={{
            float: "right",
            background: "transparent",
            border: "none",
            color: "#fff",
          }}
        >
          ✖
        </button>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: "auto", padding: "10px" }}>
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg} />
        ))}
      </div>

      {/* Input */}
      <ChatInput onSend={handleSend} />
    </div>
  );
}

function ChatInput({ onSend }) {
  const [input, setInput] = useState("");
  return (
    <div style={{ display: "flex", padding: "10px" }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask me something..."
        style={{ flex: 1, padding: "5px" }}
      />
      <button
        onClick={() => {
          if (input.trim()) {
            onSend(input);
            setInput("");
          }
        }}
      >
        Send
      </button>
    </div>
  );
}

export default ChatbotModal;
