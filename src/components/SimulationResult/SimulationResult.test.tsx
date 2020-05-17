import * as React from 'react';
import { shallow } from 'enzyme';
import { SimulationResult } from './index';

describe('SimulationResult', () => {
  it('Should render the SimulationResult component', () => {
    expect(
      shallow(<SimulationResult totalAmount={25000} reachGoalBy={[4, 2024]} />)
    ).toMatchSnapshot();
  });
});
