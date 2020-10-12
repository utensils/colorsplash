import React from "react";
import Gradients from "../components/Gradients";
import NavItemSelector from "../components/nav-item-selector.component";

function RandomColorPage({ match }) {
  const type = match.path === "/" ? "color" : "gradient";

  return (
    <NavItemSelector type={type}>
      <Gradients />
    </NavItemSelector>
  );
}

export default RandomColorPage;
