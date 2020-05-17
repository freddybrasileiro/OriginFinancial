import * as React from 'react';
import { shallow } from 'enzyme';
import { DatePicker } from './index';

describe('DatePicker', () => {
  it('Should render the DatePicker component', () => {
    expect(
      shallow(
        <DatePicker
          label="My date picker"
          value={[4, 2020]}
          onChange={() => {}}
        />
      )
    ).toMatchSnapshot();
  });
});
