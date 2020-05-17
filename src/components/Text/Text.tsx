import React from 'react';

import * as S from './Text.style';

type TextProps = {
    children: any,
    variant: string,
};

const Text = ({ children, variant }: TextProps) => (
    <S.Text variant={variant} className={variant}>{children}</S.Text>
);

export default Text;