import React from 'react';
import { SimulationResult } from '../src/components/SimulationResult';

export default {
  title: 'SimulationResult',
  component: SimulationResult,
};

export const ToStorybook = () => <SimulationResult monthlyAmount={521} totalAmount={25000} reachGoalBy={[6, 2021]} />;

ToStorybook.story = {
  name: 'default',
};
