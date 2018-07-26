import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class NavLink extends React.Component {
  render() {

    var isActive = this.context.router.route.location.pathname === this.props.to;
    var className = isActive ? 'is-active' : '';

    return(
      <li className={className}>
        <Link {...this.props}>
          {this.props.children}
        </Link>
      </li>
    );
  }
}

NavLink.contextTypes = {
  router: PropTypes.object
};

export default NavLink;
