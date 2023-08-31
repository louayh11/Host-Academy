import React from "react";

const Alert = ({ type, message }) => {
  let alertClasses = "p-4 rounded-lg";

  if (type === "error") {
    alertClasses += " bg-red-500 text-white";
  } else if (type === "success") {
    alertClasses += " bg-green-500 text-white";
  } else if (type === "info") {
    alertClasses += " bg-blue-500 text-white";
  }

  return <div className={alertClasses}>{message}</div>;
};

export default Alert;
