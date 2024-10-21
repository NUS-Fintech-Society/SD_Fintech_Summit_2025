"use client";
import React from "react";

const RegisterButton: React.FC = () => {
  return (
    <button
      style={{
        width: 200,
        height: 60,
        backgroundColor: "#4470ba",
        color: "white",
        fontWeight: "600",
        borderRadius: "9999px",
        padding: "8px 16px",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#365a96")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#4470ba")}
    >
      REGISTER
    </button>
  );
};

export default RegisterButton;
