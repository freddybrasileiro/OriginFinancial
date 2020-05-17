import React from 'react';
import { Card } from '../src/components/Card';

export default {
  title: 'Card',
  component: Card,
};

export const ToStorybook = () => <Card>Content here</Card>;

ToStorybook.story = {
  name: 'default',
};
