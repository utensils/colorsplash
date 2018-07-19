import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';

import Colors from './components/Colors';
import Gradients from './components/Gradients';

export default class App extends Component {
  state = {
    darkness: false,
    copied: false,
  }

  toggleDarkness = () => {
    this.setState({ darkness: !this.state.darkness });
    if (this.state.darkness) {
      document.body.classList.remove('darkness');
    } else {
      document.body.classList.add('darkness')
    }
  }

  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-head">
          <nav className="navbar is-transparent" style={{paddingLeft: "12px", paddingTop: "12px"}}>
            <span className="icon moon" onClick={this.toggleDarkness} style={{ cursor: "pointer"}}>
              <i className="fas fa-moon"></i>
            </span>
          </nav>
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <Switch>
              <Route exact path="/" component={Colors} />
              <Route exact path="/gradient" component={Gradients} />
            </Switch>
          </div>
        </div>
      </section>
    );
  }
}
