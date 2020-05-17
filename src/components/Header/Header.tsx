import React from 'react';
import withWidth from '@material-ui/core/withWidth';

import Logo from '../../icons/Logo';
import * as S from './Header.style';

type HeaderGoalProps = {
  width: string;
};

const Header = ({ width }: HeaderGoalProps) => (
  <S.Header width={width}>
    <Logo width={width === 'xs' ? 65 : 95} height={width === 'xs' ? 26 : 38} />
  </S.Header>
);

export default withWidth()(Header);
