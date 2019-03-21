import React, { Component } from 'react';
import './ImageContainer.scss';
import ImageIcon from './ImageIcon.js';

class ImageContainer extends Component {
  
  

  render() {
    return (
      <div className='image-container'>
        <h2 className='title'>The Cell</h2>
        <div className='image-area'>
          <ImageIcon/>
        </div>
      </div>
    )
  }
}

export default ImageContainer;