import React, { useEffect, useState } from "react";
import ImageBoard from "./ImageBoard";
import { observe } from "../../DnD-Logic";

const containerStyle = {};

const LabelLearnApp = () => {
  const [iconPos, setIconPos] = useState([1, 7]);
  // the observe function will return an unsubscribe callback
  useEffect(() => observe(newPos => setIconPos(newPos)));
  return (
    <div style={containerStyle}>
      <ImageBoard iconPosition={iconPos} />
    </div>
  );
};

export default LabelLearnApp;
