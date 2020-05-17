import * as React from 'react';
import { shallow } from 'enzyme';
import { Card } from './index';

describe('Card', () => {
  it('Should render the Card component', () => {
    expect(shallow(<Card>Content here</Card>)).toMatchSnapshot();
  });
});
