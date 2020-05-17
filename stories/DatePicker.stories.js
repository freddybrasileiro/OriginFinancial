import React from 'react';
import { DatePicker } from '../src/components/DatePicker';

export default {
  title: 'DatePicker',
  component: DatePicker,
};

export const ToStorybook = () => <DatePicker label="Reach goal by" value={[4,2020]} onChange={()=>{}}/>;

ToStorybook.story = {
  name: 'default',
};
