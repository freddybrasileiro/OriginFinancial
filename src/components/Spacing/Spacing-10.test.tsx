import * as React from 'react';
import { shallow } from 'enzyme';
import { Spacing } from './index';

describe('Spacing', () => {
  it('Should render the Spacing component with vertical 10', () => {
    expect(shallow(<Spacing vertical={10} />)).toMatchSnapshot();
  });
});
