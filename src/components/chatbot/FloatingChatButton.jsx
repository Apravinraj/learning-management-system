import React from "react";

function FloatingChatButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        background: "#007bff",
        color: "#fff",
        fontSize: "24px",
        border: "none",
        cursor: "pointer"
      }}
    >
      💬
    </button>
  );
}

export default FloatingChatButton;
