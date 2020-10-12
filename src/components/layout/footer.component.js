import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="hero-foot">
      <div className="container has-text-centered">
        <div className="is-size-7">
          <p>
            Built with
            <a
              href="https://reactjs.org"
              rel="noopener noreferrer"
              target="_blank"
            >
              ReactJS
            </a>
            and
            <a
              href="https://bulma.io"
              rel="noopener noreferrer"
              target="_blank"
            >
              Bulma
            </a>
          </p>
          <p>
            <a href="https://github.com/utensils/colorsplash">
              view source <FontAwesomeIcon icon={faGithub} />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
