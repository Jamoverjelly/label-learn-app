import React from "react";
import "./NotesContainer.scss";

const NotesContainer = props => {
  return (
    <div className="notes-wrapper">
      <h2 className="title">Notes</h2>
      <div className="notes-area" />
    </div>
  );
};

export default NotesContainer;
