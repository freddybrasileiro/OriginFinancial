import * as React from 'react';
import { shallow } from 'enzyme';
import { Header } from './index';

describe('Header', () => {
  it('Should render the Header component', () => {
    expect(shallow(<Header width="xs"/>)).toMatchSnapshot();
  });
});
