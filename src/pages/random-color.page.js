import React from "react";
import Colors from "../components/Colors";
import NavItemSelector from "../components/nav-item-selector.component";

function RandomColorPage({ match }) {
  const type = match.path === "/" ? "color" : "gradient";

  return (
    <NavItemSelector type={type}>
      <Colors />
    </NavItemSelector>
  );
}

export default RandomColorPage;
