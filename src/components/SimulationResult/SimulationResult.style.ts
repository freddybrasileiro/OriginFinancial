import styled from 'styled-components';

import {pxToRem} from '../../utils/pxToRem';
import {palette} from '../../theme/palette';

export const SimulationResult = styled.div`
  .amount-line {
    padding: ${pxToRem(40)} ${pxToRem(32)};
    display: flex;
    align-items: center;

    .body3 {
      flex: 1 1 auto;
    }
  }
  .details-line {
    background-color: ${palette.general.darkGray};
    padding: ${pxToRem(16)} ${pxToRem(32)};
    border-bottom-left-radius: ${pxToRem(4)};
    border-bottom-right-radius: ${pxToRem(4)};
  }
`;
