import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router'
import App from './App';
import './index.css';
import 'bulma/css/bulma.css'

const renderApp = () => {
  ReactDOM.render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
    document.getElementById('root'));
}

renderApp();

if (module.hot && process.env.NODE_ENV !== 'production') {
  module.hot.accept('./App', () => renderApp());
}
