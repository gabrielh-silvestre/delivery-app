import './layoutLogin.css';
import React from 'react';
import PropTypes from 'prop-types';

function LayoutLogin({ children }) {
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">{children}</div>
      </div>
    </div>
  );
}

export default LayoutLogin;

LayoutLogin.propTypes = {
  children: PropTypes.node,
}.isRequired;
