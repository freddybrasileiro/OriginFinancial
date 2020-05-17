import React from 'react';

import * as S from './Spacing.style';

type SpacingProps = {
    vertical: number,
};

const Spacing = ({ vertical }: SpacingProps) => (
    <S.Spacing vertical={vertical} />
);

export default Spacing;