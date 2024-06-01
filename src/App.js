import React, { useState } from "react";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer";

function App() {
  const EMELEMENT_OPTIONS = [
    {
      displayName: "Buttons",
      component: <Buttons />,
    },
    {
      displayName: "Header",
      component: <Header />,
    },
    {
      displayName: "Footer",
      component: <Footer />,
    },
  ];

  const [selectedElement, setSelectedElement] = useState(0);

  return (
    <>
      <Header />
      <select
        name="element"
        id="element"
        onChange={(e) => {
          setSelectedElement(e.target.value);
        }}
      >
        {EMELEMENT_OPTIONS.map((element, index) => (
          <option key={element.displayName} value={index}>
            {element.displayName}
          </option>
        ))}
      </select>
      <div className="container">
        {EMELEMENT_OPTIONS[selectedElement].component}
      </div>
      <Footer />
    </>
  );
}

export default App;
