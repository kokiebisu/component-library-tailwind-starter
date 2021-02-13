import React from "react";
import "../../styles.css";

const Button = ({ message = "Hello World" }) => {
  return <button className="bg-red-500 text-lg">{message}</button>;
};

export { Button };
