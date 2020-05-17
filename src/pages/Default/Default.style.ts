import styled from 'styled-components';

import { pxToRem } from '../../utils/pxToRem';
import { palette } from '../../theme/palette';

type DefaultProps = {
  width: string;
};

export const Default = styled.div`
  background-color: ${palette.general.lightGray}
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    width: ${(props: DefaultProps) =>
      props.width === 'xs' ? '100%' : pxToRem(560)};
  }
`;
