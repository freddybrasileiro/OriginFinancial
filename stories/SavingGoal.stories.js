import React from 'react';
import { SavingGoal } from '../src/components/SavingGoal';

export default {
  title: 'SavingGoal',
  component: SavingGoal,
};

export const ToStorybook = () => <SavingGoal goal="Buy a house" />;

ToStorybook.story = {
  name: 'default',
};
