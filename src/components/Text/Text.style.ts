import styled from 'styled-components';

import pxToRem from '../../utils/pxToRem';
import { palette } from '../../theme';

export const Text = styled.span`
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: ${pxToRem(16)};
  line-height: ${pxToRem(20)};
  color: ${palette.general.darkBlue};
`;
