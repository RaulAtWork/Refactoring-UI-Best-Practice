import React, { useState } from "react";
import Buttons from "../components/Buttons";

function Elements() {
  const EMELEMENT_OPTIONS = [
    {
      displayName: "Buttons",
      component: <Buttons />,
    },
  ];

  const [selectedElement, setSelectedElement] = useState(0);

  return (
    <div>
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
      Examples of applications
      <ul>
        <li> Rather than play with font size, play with color. </li>
        <li>
          Do not use grey text on colored backgorunds, choose the same color and
          adjust saturation and lightness
        </li>
        <li>Emphasize by de-emphasizing </li>
        <li>
          Labels are last resort, communicate wiht color and shape. But if need
          it, use -12 rooms- rather than -rooms: 12-
        </li>
        <li> Usually labels are secondary based on the inforation</li>
        <li> Use contrast to compensate for weight on icons</li>
        <li> Use contrast and texture on buttons depending on its relevance</li>
        <li> Use containers for main information for god shake!</li>
        <li>
          {" "}
          Think in how to use the extra space form the main container
          information (p81), also side breadcrums
        </li>
        <li> Do not scale buttons padding with text scale</li>
        <li> Ambiguous spacing p.97</li>
        <li> font legitibity</li>
        <li> Keep a linelength, range 20-35em</li>
        <li> Less line heights, 1 line heigh for titles p125</li>
        <li> Increase leter spacing to improve redability</li>
        <li>
          {" "}
          dithc rgb for HSL. Saturation: how vivid a color is: 0 is grey.
          lightness 0% black, 100% white
        </li>
        <li> Flipping contrast p163</li>
        <li> create depth </li>
        <li> shadows to con ver elevtion p180</li>
        <li> supercharge defaults p224</li>
        <li> is a column is not sortable, combine informatoin</li>
      </ul>
    </div>
  );
}

export default Elements;
