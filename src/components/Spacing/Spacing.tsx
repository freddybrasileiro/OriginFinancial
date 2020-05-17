import React from 'react';

import * as S from './Spacing.style';

type SpacingProps = {
    vertical: number,
};

const Spacing = ({ vertical }: SpacingProps) => (
    <S.Spacing/>
);

export default Spacing;