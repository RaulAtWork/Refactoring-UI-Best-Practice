import React from "react";
import ColorShades from "./Gallery/ColorShades";
import Headers16 from "./Gallery/Headers16";
import ButtonGallery from "./Gallery/ButtonGallery";

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
        <ColorShades />
        <Headers16 />
        <ButtonGallery />
      </section>
    </div>
  );
}

export default Gallery;
