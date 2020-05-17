import styled from 'styled-components';

import {pxToRem} from '../../utils/pxToRem';

type SpacingProps = {
  vertical: number,
};

export const Spacing = styled.div`
  ${(props: SpacingProps) => {
    if (!props.vertical || props.vertical <= 0) return `height: ${pxToRem(4)};`
    return `height: ${pxToRem(4 * props.vertical)};`
  }
  }
`;
