import * as React from 'react';
import { shallow } from 'enzyme';
import { Text } from './index';

describe('Text', () => {
  it('Should render the Text component with variant label', () => {
    expect(shallow(<Text variant="label">My label</Text>)).toMatchSnapshot();
  });
});
