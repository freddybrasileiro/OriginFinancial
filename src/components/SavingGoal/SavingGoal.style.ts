import styled from 'styled-components';

import {pxToRem} from '../../utils/pxToRem';
import {palette} from '../../theme/palette';

export const SavingGoal = styled.div`
  padding: ${pxToRem(40)} ${pxToRem(40)} ${pxToRem(48)} ${pxToRem(40)};
  .grid {
    .center {
      display: flex;
      justify-content: center;
    }
  }
`;
