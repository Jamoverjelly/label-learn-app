import React from "react";
import "./DragDropContainer.scss";
import LabelLearnApp from "./LabelLearnApp";
import IconsContainer from "./IconsContainer/IconsContainer";
import LabelsContainer from "./LabelsContainer/LabelsContainer";
import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

const DragDropContainer = props => {
  return (
    <div id="drag-drop-wrapper">
      <DragDropContextProvider backend={HTML5Backend}>
        <div className="image-box">
          <LabelLearnApp />
        </div>
        <div className="icons-box">
          <IconsContainer />
        </div>
        <div className="labels-box">
          <LabelsContainer />
        </div>
      </DragDropContextProvider>
    </div>
  );
};

export default DragDropContainer;
