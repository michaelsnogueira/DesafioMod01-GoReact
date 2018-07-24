import React from 'react';
import PropTypes from 'prop-types';

const Header = props => (
  <div className="header">
    <header>
      {props.children}
    </header>
  </div>
);

Header.defaultProps = {
  children: 'Rocket Book',
};

Header.propTypes = {
  children: PropTypes.string,
};

export default Header;
