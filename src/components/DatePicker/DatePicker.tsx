import React from 'react';

import { Spacing } from '../../components/Spacing';
import { Text } from '../../components/Text';
import ArrowIcon from '../../icons/Arrow';
import * as S from './DatePicker.style';

type DatePickerProps = {
    label: string,
};

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Septemper",
    "October",
    "November",
    "Dezember"
];

const DatePicker = ({ label }: DatePickerProps) => {
    const now = new Date();
    const [date, setDate] = React.useState([now.getMonth(), now.getFullYear()]);
    const [decDisabled, setDecDisabled] = React.useState(true);
    
    const shouldDecDisabled = (newDate: Array<number>) => {
        return newDate[0] === now.getMonth() && newDate[1] === now.getFullYear();
    }

    const handleDecDate = () => {
        if (decDisabled) return;
        const newMonth = date[0] === 1 ? 12 : date[0] - 1;
        const newYear = date[0] === 1 ? date[1] - 1 : date[1];
        setDate([newMonth, newYear]);
        if(shouldDecDisabled([newMonth, newYear])) setDecDisabled(true);
        else setDecDisabled(false);
    }
    
    const handleIncDate = () => {
        setDecDisabled(false);
        const newMonth = date[0] === 12 ? 1 : date[0] + 1;
        const newYear = date[0] === 12 ? date[1] + 1 : date[1];
        setDate([newMonth, newYear]);
    }

    return (
        <S.DatePicker>
            <Text variant="label">{label}</Text>
            <Spacing vertical={1} />
            <div className="picker">
                <div className={`arrow left ${decDisabled && "disabled"}`} onClick={handleDecDate}><ArrowIcon width={16} height={16} /></div>
                <div className="content">
                    <Text variant="body1">{months[date[0]]}</Text>
                    <Text variant="body2">{date[1]}</Text>
                </div>
                <div className="arrow right" onClick={handleIncDate}><ArrowIcon width={16} height={16} /></div>
            </div>
        </S.DatePicker>
    )
};

export default DatePicker;