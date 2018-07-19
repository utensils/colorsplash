import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import createHistory from 'history/createBrowserHistory'
import App from './App';
import './index.css';
import 'bulma/css/bulma.css'

const history = createHistory();

const renderApp = () => {
  ReactDOM.render(
    <Router history={history}>
      <App />
    </Router>,
    document.getElementById('root'));
}

renderApp();

if (module.hot && process.env.NODE_ENV !== 'production') {
  module.hot.accept('./App', () => renderApp());
}
