import React, { Component } from "react";
import './NotesContainer.scss';

class NotesContainer extends Component {
  render() {
    return (
      <div className='notes-container'>
        <h2 className='title'>Notes</h2>
        <div className='notes-area'></div>
      </div>
    )
  }
}

export default NotesContainer;

