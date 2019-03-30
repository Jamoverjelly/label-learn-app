import React from "react";
import ImageGridCell from "./ImageGridCell";
import { Star } from "../AppIcons/Star";

/** Styling properties applied to the board element */
const gridStyle = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexWrap: "wrap"
};

/** Styling properties applied to each square element */
const cellStyle = { width: "0.8%", height: "1.5%" };

/**
 * The ImageGrid component
 * @param props The react props
 */
const ImageGrid = ({ iconPosition: [iconX, iconY] }) => {
  function renderCell(i) {
    const x = i % 750;
    const y = Math.floor(i / 750);
    return (
      <div key={i} style={cellStyle}>
        <ImageGridCell x={x} y={y}>
          <Star isIcon={x === iconX && y === iconY} />
        </ImageGridCell>
      </div>
    );
  }

  const squares = [];
  for (let i = 0; i < 6000; i += 1) {
    squares.push(renderCell(i));
  }

  return <div style={gridStyle}>{squares}</div>;
};

export default ImageGrid;
