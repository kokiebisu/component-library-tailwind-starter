import React from "react";
import "../../styles.css";

const Button = ({ message = "Button" }) => {
  return (
    <button className="p-3 bg-gradient-to-r from-blue-600 to-blue-400 rounded-md text-white">
      {message}
    </button>
  );
};

export { Button };
