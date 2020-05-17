import React from 'react';

import * as S from './Text.style';

type TextProps = {
    children: string,
    variant: string,
};

const Text = ({ children, variant }: TextProps) => (
    <S.Text>{children}</S.Text>
);

export default Text;