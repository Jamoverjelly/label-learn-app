import React, { Component } from "react";
import './IconsContainer.scss';
import Icon from '../AppIcons/IconSVG';

class IconsContainer extends Component {
  render() {
    const colors = ["red", "orange", "gold", "seagreen", "lightskyblue", "dodgerblue", "darkblue", "pink", "purple", "indigo"];
    const icons = [];

    colors.map(color => {
      return icons.push(
        <div className="icon">
          <Icon fill={color}/>
        </div>
      )
    });

    return (
      <div className='icons-container'>
        <h2 className='title'>Icons</h2>
        <div className='icons-area'>
          {icons}
        </div>
      </div>
    )
  }
}

export default IconsContainer;