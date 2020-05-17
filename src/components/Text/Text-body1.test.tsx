import * as React from 'react';
import { shallow } from 'enzyme';
import { Text } from './index';

describe('Text', () => {
  it('Should render the Text component with variant body1', () => {
    expect(shallow(<Text variant="body1">My label</Text>)).toMatchSnapshot();
  });
});
