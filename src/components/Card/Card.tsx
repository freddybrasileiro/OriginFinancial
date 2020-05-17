import React from 'react';

import * as S from './Card.style';

type CardProps = {
  children: any;
};

const Card = ({ children }: CardProps) => <S.Card>{children}</S.Card>;

export default Card;
