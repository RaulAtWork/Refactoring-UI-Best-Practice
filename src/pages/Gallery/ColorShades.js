import React, { useEffect, useRef, useState } from "react";

function ColorShades() {
  return (
    <article>
      <h1>Color Shade</h1>
      <div className="color-list">
        <ColorElement bgColor="bg-primary-s1" />
        <ColorElement bgColor="bg-primary-s2" />
        <ColorElement bgColor="bg-primary-s3" />
        <ColorElement bgColor="bg-primary-s4" />
      </div>
      <div className="color-list">
        <ColorElement bgColor="bg-accent-s1" textColor="text-color-accent-s1" />
        <ColorElement bgColor="bg-accent-s2" textColor="text-color-accent-s2" />
        <ColorElement bgColor="bg-accent-s3" textColor="text-color-accent-s3" />
        <ColorElement bgColor="bg-accent-s4" textColor="text-color-accent-s4" />
      </div>
      <div className="color-list">
        <ColorElement bgColor="bg-neutral-s1" />
        <ColorElement bgColor="bg-neutral-s2" />
        <ColorElement bgColor="bg-neutral-s3" />
        <ColorElement bgColor="bg-neutral-s4" />
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
