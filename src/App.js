import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './App.css';

import NavItem from './components/NavItem';
import Colors from './components/Colors';
import Gradients from './components/Gradients';

export default class App extends Component {
  state = {
    copied: false,
  }

  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="tabs is-medium is-centered">
              <ul>
                <NavItem to="/">Color</NavItem>
                <NavItem to="/gradient">Gradient</NavItem>
              </ul>
            </div>
            <Switch>
              <Route exact path="/" component={Colors} />
              <Route exact path="/gradient" component={Gradients} />
            </Switch>
            <div className="content is-size-7">
              <p>Built with <a href="https://reactjs.org" rel="noopener noreferrer" target="_blank">ReactJS</a> and <a href="https://bulma.io" rel="noopener noreferrer" target="_blank">Bulma</a></p>
              <p><a href="https://github.com/utensils/colorsplash">view source <FontAwesomeIcon icon={faGithub}/></a></p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
