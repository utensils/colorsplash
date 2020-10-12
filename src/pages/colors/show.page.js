import React from "react";

function convertHexToRgb(hex) {
  const red = parseInt(hex.slice(0, 2), 16);
  const green = parseInt(hex.slice(2, 4), 16);
  const blue = parseInt(hex.slice(4, 6), 16);
  return `RGB(${[red, green, blue].join(",")})`;
}

function ColorShowPage({ match }) {
  const id = match.params.id;
  const hex = `#${id}`;

  return (
    <section>
      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">{hex}</h1>
            <h2 class="subtitle" style={{ backgroundColor: hex }}>
              &nbsp;
            </h2>
          </div>
        </div>
      </section>

      <section className="section">
        <nav class="level">
          <div class="level-item has-text-centered is-6">
            <div>
              <p class="heading">HEX</p>
              <p class="title">{hex}</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">RGB</p>
              <p class="title">{convertHexToRgb(id)}</p>
            </div>
          </div>
        </nav>
      </section>
    </section>
  );
}

export default ColorShowPage;
