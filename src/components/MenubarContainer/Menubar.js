import React from "react";
import "./Menubar.scss";
import MenuIcon from "./MenuIcon";

const Menubar = props => {
  return (
    <div className="menubar-container">
      <div className="menubar-content-area" role="menubar">
        <div className="menubar-button-title-container">
          <button
            className="main-menu material-icons-extended"
            aria-label="Main menu"
            title="Main menu"
          >
            <MenuIcon fill="#000" className="menu-icon" />
          </button>
          <h1>Label and Learn App</h1>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
