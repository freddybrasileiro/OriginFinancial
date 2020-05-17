import React from 'react';

import {SavingGoal as SavingGoalComponent} from '../../components/SavingGoal';
import {Spacing} from '../../components/Spacing';
import {Text} from '../../components/Text';
import {Default as DefaultPage} from '../../pages/Default';
import * as S from './SavingGoal.style';

const SavingGoal = () => (
  <DefaultPage>
    <S.SavingGoal>
      <Spacing vertical={13} />
      <Text variant="body9">Let's plan your <Text variant="body10">saving goal.</Text></Text>
      <Spacing vertical={10} />
      <SavingGoalComponent goal="Buy a home" />
    </S.SavingGoal>
  </DefaultPage>
);

export default SavingGoal;