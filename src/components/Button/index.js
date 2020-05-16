import React from 'react';
// import PropTypes from "prop-types";
import MaterialButton from '@material-ui/core/Button';

const Button = ({ children }) => {
  return (
    <MaterialButton variant="contained">{ children }</MaterialButton>
  );
}

Button.propTypes = {};
  
Button.defaultProps = {};

export default Button;
