import React from "react";
import ColorShades from "./Gallery/ColorShades";

function Gallery() {
  return (
    <div className="container-side-and-content">
      <section className="side-bar">
        <ul className="side-bar-list">
          <li>Input/form</li>
          <li>Inputs with depth</li>
          <li>Buttons</li>
          <li>Buttons with depth</li>
          <li>H1...</li>
          <li>Badges</li>
          <li>Notificatoins with line at the left</li>
        </ul>
      </section>
      <section className="container">
        <h1>this will have some shees</h1>
        <ColorShades />
      </section>
    </div>
  );
}

export default Gallery;
