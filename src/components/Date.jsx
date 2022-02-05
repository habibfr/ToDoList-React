import React from "react";

function Time() {
  const date = new Date().toLocaleDateString();
  return date;
}

export default Time;
