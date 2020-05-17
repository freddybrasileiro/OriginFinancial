import * as React from 'react';
import { shallow } from 'enzyme';
import { SavingGoal } from './index';

describe('SavingGoal', () => {
  it('Should render the SavingGoal component', () => {
    expect(
      shallow(<SavingGoal goal="Buy a house" width="xs" />)
    ).toMatchSnapshot();
  });
});
