import React from 'react';
import { DatePicker } from '../src/components/DatePicker';

export default {
  title: 'DatePicker',
  component: DatePicker,
};

export const ToStorybook = () => <DatePicker label="Reach goal by"/>;

ToStorybook.story = {
  name: 'default',
};
