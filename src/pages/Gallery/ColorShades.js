import React, { useEffect, useRef, useState } from "react";

function ColorShades() {
  return (
    <article>
      <h1>Color Shade</h1>
      <div className="color-list">
        <ColorElement
          bgColor="bg-primary-s1"
          textColor="text-color-primary-s1"
        />
        <ColorElement
          bgColor="bg-primary-s2"
          textColor="text-color-primary-s2"
        />
        <ColorElement
          bgColor="bg-primary-s3"
          textColor="text-color-primary-s3"
        />
        <ColorElement
          bgColor="bg-primary-s4"
          textColor="text-color-primary-s4"
        />
        <ColorElement
          bgColor="bg-primary-s5"
          textColor="text-color-primary-s5"
        />
        <ColorElement
          bgColor="bg-primary-s6"
          textColor="text-color-primary-s6"
        />
        <ColorElement
          bgColor="bg-primary-s7"
          textColor="text-color-primary-s7"
        />
        <ColorElement
          bgColor="bg-primary-s8"
          textColor="text-color-primary-s8"
        />
        <ColorElement
          bgColor="bg-primary-s9"
          textColor="text-color-primary-s9"
        />
      </div>
    </article>
  );
}

export default ColorShades;

function ColorElement({ bgColor, textColor }) {
  const ref = useRef();
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    setBackgroundColor(
      window.getComputedStyle(ref.current).getPropertyValue("background-color")
    );
  }, []);

  return (
    <div className={`color-shade ${bgColor}`} ref={ref}>
      <span className={textColor}>{backgroundColor}</span>
    </div>
  );
}
