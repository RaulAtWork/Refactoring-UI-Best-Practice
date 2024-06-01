import React from "react";

function Buttons() {
  return (
    <div>
      <h2>This is the buttons text</h2>
      <section className="flex-columns">
        <p>
          Primary actions should be obvious. Solid and high contrast
          backgoround.
        </p>
        <button className="primary-button" type="button">
          Press me!
        </button>
        <p>
          Secondary actions should be clear but not prominent. Usually a ligth
          outline or lower contrast background
        </p>
        <button className="secondary-button" type="button">
          Press me!
        </button>
        <button className="secondary-button-contrast" type="button">
          Press me!
        </button>
        <p>
          Tertiary actions shold be discoberable but not intrusive, style it as
          almost a link
        </p>
        <button className="tertiary-button" type="button">
          Press me!
        </button>
      </section>
    </div>
  );
}

export default Buttons;
