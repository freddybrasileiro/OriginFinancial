import * as React from 'react';
import { shallow } from 'enzyme';
import { Text } from './Text.style';

describe('Text', () => {
  it('Should render the Text style with variant body1', () => {
    expect(shallow(<Text variant="body1">My label</Text>)).toMatchSnapshot();
  });
});
