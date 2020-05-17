import React from 'react';
import { SimulationResult } from '../src/components/SimulationResult';

export default {
  title: 'SimulationResult',
  component: SimulationResult,
};

export const ToStorybook = () => (
  <SimulationResult totalAmount={25000} reachGoalBy={[4, 2024]} />
);

ToStorybook.story = {
  name: 'default',
};
