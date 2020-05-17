import React from 'react';
import Grid from '@material-ui/core/Grid';
import withWidth from '@material-ui/core/withWidth';

import {Button} from '../../components/Button';
import {Card} from '../../components/Card';
import {DatePicker} from '../../components/DatePicker';
import {SimulationResult} from '../../components/SimulationResult';
import {Spacing} from '../../components/Spacing';
import {Text} from '../../components/Text';
import {TextField} from '../../components/TextField';
import InsuranceAuto from '../../icons/InsuranceAuto';
import * as S from './SavingGoal.style';

type SavingGoalProps = {
    goal: string,
    width: string,
};

const SavingGoal = ({ goal, width }: SavingGoalProps) => {
    const [totalAmount, setTotalAmount] = React.useState(25000);
    const onAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => setTotalAmount(parseInt(event.target.value));
    const now = new Date();
    const [date, setDate] = React.useState([now.getMonth(), now.getFullYear() + 4]);
    const onDateChange = (newDate: Array<number>) => setDate(newDate);
    return (
        <Card>
            <S.SavingGoal width={width}>
                <Grid container spacing={0} className="grid">
                    <Grid item xs={12}>
                        <InsuranceAuto />
                    </Grid>
                    <Grid item xs={12}>
                        <Text variant="body7">{goal}</Text>
                    </Grid>
                    <Grid item xs={12}>
                        <Text variant="body8">Saving goal</Text>
                    </Grid>
                    <Grid item xs={12}>
                        <Spacing vertical={width === "xs" ? 8 : 10} />
                    </Grid>
                    <Grid container spacing={2} className="grid">
                        <Grid item xs={12} sm={6}>
                            <TextField label="Total amount" adornment="$" placeholder="0" value={totalAmount} defaultValue={totalAmount} onChange={onAmountChange} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <DatePicker label="Reach goal by" value={date} onChange={onDateChange} />
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Spacing vertical={8} />
                    </Grid>
                    <Grid item xs={12}>
                        <SimulationResult totalAmount={totalAmount} reachGoalBy={date} />
                    </Grid>
                    <Grid item xs={12}>
                        <Spacing vertical={width === "xs" ? 9 : 8} />
                    </Grid>
                    <Grid item xs={12} className="center">
                        <Button>Confirm</Button>
                    </Grid>
                </Grid>
            </S.SavingGoal>
        </Card>
    )
};

export default withWidth()(SavingGoal);
