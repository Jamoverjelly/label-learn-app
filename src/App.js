import React, { Component } from "react";
import "./App.scss";
import LeftPane from "./components/LeftPane/LeftPane";
import Menubar from "./components/MenubarContainer/Menubar";
import DragDropContainer from "./components/DragDropContainer/DragDropContainer";
import NotesContainer from "./components/NotesContainer/NotesContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menubar />
        <LeftPane />
        <div id="content-container">
          <div className="drag-drop-container">
            <DragDropContainer />
          </div>
          <div className="notes-container">
            <NotesContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
