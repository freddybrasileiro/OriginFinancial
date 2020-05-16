import React from 'react';
import Button from '../src/components/Button';

export default {
  title: 'Button',
  component: Button,
};

export const ToStorybook = () => <Button />;

ToStorybook.story = {
  name: 'to Storybook',
};
