import React from 'react';

const SVG = ({
  style={},
  fill="",
  width = "880px",
  height = "460px",
  className = "",
  viewBox = "0 0 24 24"
}) => (
  <svg
    width={width}
    height={height}
    style={style}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
  >
    <path
      //fill={fill}
      d="M 0,0 5,-5 -12.5,0 5,5 0,0 z"
    />
  </svg>
);

export default SVG;