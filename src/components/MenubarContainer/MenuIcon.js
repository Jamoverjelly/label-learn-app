import React from 'react';

const SVG = ({
  style={},
  fill="#000",
  width = "24px",
  className = "",
  viewBox = "0 0 24 24"
}) => (
  <svg
    width={width}
    height={width}
    style={style}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
  >
    <path
      fill={fill}
      d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
    />
  </svg>
);

export default SVG;