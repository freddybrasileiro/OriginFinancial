import styled from 'styled-components';

import pxToRem from '../../utils/pxToRem';
import { palette } from '../../theme';

type TextProps = {
  variant: string,
};

export const Text = styled.span`
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  color: ${palette.general.darkBlue};
  ${(props: TextProps) => {
    if (props.variant === "label") {
      return `
        font-weight: 500;
        font-size: ${pxToRem(16)};
        line-height: ${pxToRem(20)};
      `
    } else if (props.variant === "body1") {
      return `
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: -0.166667px;
      `
    } else if (props.variant === "body2") {
      return `
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
      `
    }
  }}
`;
