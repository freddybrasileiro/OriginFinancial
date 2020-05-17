import styled from 'styled-components';

import { pxToRem } from '../../utils/pxToRem';
import { palette } from '../../theme/palette';

export const Card = styled.div`
  width: 100%;
  background-color: ${palette.general.white};
  border: ${pxToRem(1)} solid ${palette.general.lightGray};
  box-shadow: 0 ${pxToRem(1)} ${pxToRem(4)} ${palette.general.boxShadow};
  border-radius: ${pxToRem(4)};
`;
