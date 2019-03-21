import React, { Component } from 'react';
import './App.scss';
import ImageContainer from './components/ImageContainer/ImageContainer';
import LeftPane from './components/LeftPane/LeftPane';
import Menubar from './components/MenubarContainer/Menubar';
import IconsContainer from './components/IconsContainer/IconsContainer';
import LabelsContainer from './components/LabelsContainer/LabelsContainer';
import NotesContainer from './components/NotesContainer/NotesContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Menubar/>
        <LeftPane/>
        <div id="content-container">
          <ImageContainer id="image-box"/>
          <IconsContainer id="icons-box"/>
          <LabelsContainer id="labels-box"/>
          <NotesContainer id="notes-box"/>
        </div>
      </div>
    );
  }
}

export default App;
