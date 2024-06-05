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
        <ColorElement bgColor="bg-primary-s5" />
        <ColorElement bgColor="bg-primary-s6" />
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
      <div className="color-list">
        <ColorElement bgColor="bg-accent-s1" textColor="text-color-accent-s1" />
        <ColorElement bgColor="bg-accent-s2" textColor="text-color-accent-s2" />
        <ColorElement bgColor="bg-accent-s3" textColor="text-color-accent-s3" />
        <ColorElement bgColor="bg-accent-s4" textColor="text-color-accent-s4" />
        <ColorElement bgColor="bg-accent-s5" textColor="text-color-accent-s5" />
        <ColorElement bgColor="bg-accent-s6" textColor="text-color-accent-s6" />
        <ColorElement bgColor="bg-accent-s7" textColor="text-color-accent-s7" />
        <ColorElement bgColor="bg-accent-s8" textColor="text-color-accent-s8" />
        <ColorElement bgColor="bg-accent-s9" textColor="text-color-accent-s9" />
      </div>
      <div className="color-list">
        <ColorElement bgColor="bg-neutral-s1" />
        <ColorElement bgColor="bg-neutral-s2" />
        <ColorElement bgColor="bg-neutral-s3" />
        <ColorElement bgColor="bg-neutral-s4" />
        <ColorElement bgColor="bg-neutral-s5" />
        <ColorElement bgColor="bg-neutral-s6" />
        <ColorElement bgColor="bg-neutral-s7" />
        <ColorElement bgColor="bg-neutral-s8" />
        <ColorElement bgColor="bg-neutral-s9" />
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
