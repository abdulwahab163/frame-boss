import React from "react";
import "./Button.css";

function Button({ title, size }) {
  return (
    <button
      style={{ width: size ? size : 200 }}
      type="submit"
      className="buttonStyleBoss outline"
    >
      {title}
    </button>
  );
}

export default Button;
