import React from 'react';

import { Spacing } from '../../components/Spacing';
import { Text } from '../../components/Text';
import ArrowIcon from '../../icons/Arrow';
import * as S from './DatePicker.style';

type DatePickerProps = {
    label: string,
    month: number,
    year: number,
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
    const month = 10;
    const year = 2020;
    return (
        <S.DatePicker>
            <Text variant="label">{label}</Text>
            <Spacing vertical={1} />
            <div className="picker">
                <div className="arrow left"><ArrowIcon width={16} height={16} /></div>
                <div className="content">
                    <Text variant="label">{months[month+1]}</Text>
                    <Text variant="label">{year}</Text>
                </div>
                <div className="arrow right"><ArrowIcon width={16} height={16} /></div>
            </div>
        </S.DatePicker>
    )
};

export default DatePicker;