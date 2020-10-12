import React from "react";
import { Route, Switch } from "react-router-dom";

// Layout
import Nav from "./components/layout/nav.component";
import Content from "./components/layout/content.component";
import Footer from "./components/layout/footer.component";

// Pages
import RandomColorPage from "./pages/random-color.page";
import RandomGradientPage from "./pages/random-gradient.page";
import ColorShowPage from "./pages/colors/show.page";

function App() {
  return (
    <section className="hero is-fullheight is-default is-bold">
      <Nav />
      <Content>
        <Switch>
          <Route exact path="/" component={RandomColorPage} />
          <Route exact path="/gradient" component={RandomGradientPage} />
          <Route exact path="/colors/:id" component={ColorShowPage} />
        </Switch>
      </Content>
      <Footer />
    </section>
  );
}

export default App;
