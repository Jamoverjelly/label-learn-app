import React from "react";
import { Cell } from "./Cell";
import { DropTarget } from "react-dnd";
import { moveIcon } from "../../../DnD-Logic";
import ItemTypes from "../../../ItemTypes";

const gridSquareStyle = {
  position: "relative",
  width: "100%",
  height: "100%"
};

const ImageGridCell = ({
  x,
  y,
  connectDropTarget,
  isOver,
  canDrop,
  children
}) => {
  return connectDropTarget(
    <div style={gridSquareStyle}>
      <Cell>{children}</Cell>
    </div>
  );
};

export default DropTarget(
  ItemTypes.ICON,
  {
    drop: props => moveIcon(props.x, props.y)
  },
  (connect, monitor) => {
    return {
      connectDropTarget: connect.dropTarget(),
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop()
    };
  }
)(ImageGridCell);
