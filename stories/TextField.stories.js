import React from 'react';
import { TextField } from '../src/components/TextField';

export default {
  title: 'TextField',
  component: TextField,
};

export const ToStorybook = () => (
  <TextField
    adornment="$"
    placeholder="0"
    label="Total amount"
    defaultValue={25000}
  />
);

ToStorybook.story = {
  name: 'with adornment and mask',
};
