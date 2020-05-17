import styled from 'styled-components';

import {pxToRem} from '../../utils/pxToRem';
import {palette} from '../../theme/palette';

type HeaderGoalProps = {
  width: string,
};

export const Header = styled.div`
  ${(props:HeaderGoalProps) => {
    if (props.width === "xs") return `padding: ${pxToRem(12)} ${pxToRem(16)};`
    return `padding: ${pxToRem(16)} ${pxToRem(36)};`
  }}
  background-color: ${palette.general.white}
`;
