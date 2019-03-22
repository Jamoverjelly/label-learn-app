import React, { Component } from "react";
import './NotesContainer.scss';

const NotesContainer = props => {
  return (
    <div className='notes-container'>
      <h2 className='title'>Notes</h2>
      <div className='notes-area'></div>
    </div>
  )
}

export default NotesContainer;

