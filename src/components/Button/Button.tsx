import React from 'react';
import MaterialButton from '@material-ui/core/Button';

type ButtonProps = {
  children: any;
};

const Button = ({ children }: ButtonProps) => (
  <MaterialButton variant="contained">{children}</MaterialButton>
);

export default Button;
