import styled from 'styled-components';

import {pxToRem} from '../../utils/pxToRem';

type SavingGoalProps = {
  width: string,
};

export const SavingGoal = styled.div`
  ${(props:SavingGoalProps) => {
    if (props.width === "xs") {
      return `padding: ${pxToRem(28)} ${pxToRem(24)} ${pxToRem(32)} ${pxToRem(24)};`;
    }
    return `padding: ${pxToRem(40)} ${pxToRem(40)} ${pxToRem(48)} ${pxToRem(40)};`
  }}
  
  .grid {
    .center {
      display: flex;
      justify-content: center;
    }
  }
`;
