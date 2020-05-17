import styled from 'styled-components';

import pxToRem from '../../utils/pxToRem';
import { palette } from '../../theme';

export const DatePicker = styled.div`
  .picker {
    background-color: ${palette.general.white};
    border: 1px solid ${palette.general.lightGray};
    box-sizing: border-box;
    border-radius: ${pxToRem(4)};
    height: ${pxToRem(58)};
    display: flex;
  
    > div {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .arrow {
      background-color: ${palette.general.darkGray};
      width: ${pxToRem(48)};
      cursor: pointer;
  
      :hover {
        background-color: ${palette.general.lightGray};
      }

    }

    .arrow.left.disabled {
      cursor: default;
      :hover {
        background-color: ${palette.general.darkGray};
      }
    }
    
    .arrow.left {
      border-radius: ${pxToRem(4)} 0 0 ${pxToRem(4)};
    }
    
    .arrow.right {
      border-radius: 0 ${pxToRem(4)} ${pxToRem(4)} 0;
  
      svg {
        transform: rotate(180deg);
      }
    }
  
    .content {
      flex: 1 1 auto;
      flex-direction: column;
    }
  }
`;
