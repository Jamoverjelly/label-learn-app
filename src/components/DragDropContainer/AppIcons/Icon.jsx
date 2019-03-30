import React from "react";
import { DragSource, DragPreviewImage } from "react-dnd";
import ItemTypes from "../../../ItemTypes";
import IconSVG from "./IconSVG";

const iconStyle = {
  fontSize: 40,
  fontWeight: "bold",
  cursor: "move"
};

const Icon = ({ connectDragSource, connectDragPreview, isDragging }) => {
  return (
    <>
      <DragPreviewImage connect={connectDragPreview} src={IconSVG} />
      <div
        ref={connectDragSource}
        style={{ ...iconStyle, opacity: isDragging ? 0.5 : 1 }}
      >
        <IconSVG />
      </div>
    </>
  );
};

export default DragSource(
  ItemTypes.ICON,
  {
    beginDrag: () => ({})
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  })
)(Icon);
