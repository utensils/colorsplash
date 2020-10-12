import React from "react";
import NavItem from "./NavItem";

function NavItemSelector({ children, type }) {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="tabs is-medium is-centered">
            <ul>
              <NavItem to="/" type={type}>
                Color
              </NavItem>
              <NavItem to="/gradient" type={type}>
                Gradient
              </NavItem>
            </ul>
          </div>

          {children}
        </div>
      </div>
    </section>
  );
}

export default NavItemSelector;
