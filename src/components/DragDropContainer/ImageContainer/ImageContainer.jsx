import React from "react";
import "./ImageContainer.scss";
import ImageGrid from "./ImageGrid";

const ImageContainer = props => {
  return (
    <div className="image-container">
      <h2 className="title">The Cell</h2>
      <div className="image-area">
        <ImageGrid iconPosition={props.iconPosition} />
      </div>
    </div>
  );
};

export default ImageContainer;
