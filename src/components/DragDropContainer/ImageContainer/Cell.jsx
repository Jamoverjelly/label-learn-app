import React from "react";

const cellStyle = {
  width: "100%",
  height: "100%"
};

export const Cell = ({ children }) => {
  return <div style={{ ...cellStyle }}>{children}</div>;
};
