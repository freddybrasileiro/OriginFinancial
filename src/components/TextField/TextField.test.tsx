import * as React from 'react';
import { shallow } from 'enzyme';
import { TextField } from './index';

describe('TextField', () => {
  it('Should render the TextField component', () => {
    expect(shallow(<TextField adornment="$" placeholder="" label="Total amount" onChange={()=>"{}"} value={25000} defaultValue={25000} />)).toMatchSnapshot();
  });
});
