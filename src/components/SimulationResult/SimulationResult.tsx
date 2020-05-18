import React from 'react';
import NumberFormat from 'react-number-format';

import { Card } from '../../components/Card';
import { Text } from '../../components/Text';
import { months as monthNames } from '../../utils/months';
import * as S from './SimulationResult.style';

type SimulationResultProps = {
  totalAmount: number;
  reachGoalBy: Array<number>;
};

const SimulationResult = ({
  totalAmount,
  reachGoalBy,
}: SimulationResultProps) => {
  const current = new Date();
  const months =
    (reachGoalBy[1] - current.getFullYear()) * 12 +
    reachGoalBy[0] -
    current.getMonth();
  const monthlyAmount = Math.round(totalAmount / months);
  return (
    <Card>
      <S.SimulationResult>
        <div className="amount-line">
          <Text variant="body3">Monthly amount</Text>
          <Text variant="body4">${monthlyAmount}</Text>
        </div>
        <div className="details-line">
          <Text variant="body5">
            You’re planning{' '}
            <Text variant="body6">{months} monthly deposits</Text> to reach your{' '}
            <Text variant="body6">${<NumberFormat value={totalAmount} displayType={'text'} thousandSeparator={true} decimalScale={2}/>}</Text> goal by{' '}
            <Text variant="body6">
              {monthNames[reachGoalBy[0]]} {reachGoalBy[1]}
            </Text>
            .
          </Text>
        </div>
      </S.SimulationResult>
    </Card>
  );
};

export default SimulationResult;
