import React from 'react';

const Icon = ({
  style={},
  fill="gold",
  width = "30px",
  className = "",
  viewBox = "0 0 25 25",
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
      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
    />
  </svg>
);

export default Icon;