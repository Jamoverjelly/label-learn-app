import React, { useEffect, useState } from "react";
import ImageContainer from "./ImageContainer/ImageContainer";
import { observe } from "../../DnD-Logic";

const LabelLearnApp = () => {
  const [iconPos, setIconPos] = useState([1, 7]);
  // the observe function will return an unsubscribe callback
  useEffect(() => observe(newPos => setIconPos(newPos)));
  return (
    <>
      <ImageContainer iconPosition={iconPos} />
    </>
  );
};

export default LabelLearnApp;
