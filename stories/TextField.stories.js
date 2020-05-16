import React from 'react';
import { TextField } from '../src/components/TextField';

export default {
  title: 'TextField',
  component: TextField,
};

export const ToStorybook = () => <TextField adornment="$" placeholder={0} label="Total amount"/>;

ToStorybook.story = {
  name: 'with adornment and mask',
};
