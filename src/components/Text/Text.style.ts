import styled from 'styled-components';

import {pxToRem} from '../../utils/pxToRem';
import {palette} from '../../theme/palette';

type TextProps = {
  variant: string,
};

export const Text = styled.span`
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  color: ${palette.general.darkBlue};
  font-weight: 500;
  ${(props: TextProps) => {
    if (props.variant === "label") {
      return `
        font-size: ${pxToRem(16)};
        line-height: ${pxToRem(20)};
      `
    } else if (props.variant === "body1") {
      return `
        font-weight: 600;
        font-size: ${pxToRem(20)};
        line-height: ${pxToRem(24)};
        letter-spacing: ${pxToRem(-0.166667)};
      `
    } else if (props.variant === "body2") {
      return `
        font-size: ${pxToRem(16)};
        line-height: ${pxToRem(20)};
      `
    } else if (props.variant === "body3") {
      return `
        font-size: ${pxToRem(18)};
        line-height: ${pxToRem(24)};
      `
    } else if (props.variant === "body4") {
      return `
        font-style: normal;
        font-size: ${pxToRem(40)};
        line-height: ${pxToRem(32)};
        letter-spacing: ${pxToRem(-0.266667)};
        color: ${palette.general.blue};
      `
    } else if (props.variant === "body5") {
      return `
        font-style: normal;
        font-size: ${pxToRem(12)};
        line-height: ${pxToRem(16)};
      `
    } else if (props.variant === "body6") {
      return `
        font-weight: 600;
        font-style: normal;
        font-size: ${pxToRem(12)};
        line-height: ${pxToRem(16)};
      `
    } else if (props.variant === "body7") {
      return `
        font-weight: 600;
        font-size: ${pxToRem(32)};
        line-height: ${pxToRem(40)};
        letter-spacing: ${pxToRem(-0.266667)};
      `
    } else if (props.variant === "body8") {
      return `
        font-size: ${pxToRem(16)};
        line-height: ${pxToRem(20)};
        color: ${palette.general.mediumGray};
      `
    }
    return '';
  }}
`;
