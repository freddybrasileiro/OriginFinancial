import React from 'react';
import withWidth from '@material-ui/core/withWidth';

import {Header} from '../../components/Header';
import * as S from './Default.style';

type DefaultProps = {
  children: any,
  width: string,
};

const Default = ({ children, width }: DefaultProps) => (
  <S.Default width={width}>
    <Header />
    <div className="content">
      {children}
    </div>
  </S.Default>
);

export default withWidth()(Default);