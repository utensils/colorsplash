import React from "react";
import { Link } from "react-router-dom";

function NavLink(props) {
  const className = () => {
    const { type, to } = props;

    if (type === "color" && to === "/") return "is-active";
    if (type === "gradient" && to === "/gradient") return "is-active";

    return "";
  };

  return (
    <li className={className()}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  );
}

export default NavLink;
