import React, { Component } from "react";
import './LabelsContainer.scss';

class LabelsContainer extends Component {
  render() {
    return (
      <div className='labels-container'>
        <h2 className='title'>Labels</h2>
        <div className='labels-area'></div>
      </div>
    )
  }
}

export default LabelsContainer;