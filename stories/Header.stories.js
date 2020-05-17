import React from 'react';
import { Header } from '../src/components/Header';

export default {
  title: 'Header',
  component: Header,
};

export const ToStorybook = () => <Header />;

ToStorybook.story = {
  name: 'default',
};