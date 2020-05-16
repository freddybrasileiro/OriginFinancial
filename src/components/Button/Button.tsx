import React from 'react';
import MaterialButton from '@material-ui/core/Button';

type ButtonSeparatorProps = {
  children: any;
};

const Button = ({ children }: ButtonSeparatorProps) => (
  <MaterialButton variant="contained">{ children }</MaterialButton>
);

export default Button;