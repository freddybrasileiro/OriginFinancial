import React from 'react';

import { Spacing } from '../../components/Spacing';
import { Text } from '../../components/Text';
import ArrowIcon from '../../icons/Arrow';
import { months } from '../../utils/months';
import * as S from './DatePicker.style';

type DatePickerProps = {
  label: string;
  value: Array<number>;
  onChange: Function;
};

const DatePicker = ({ label, value, onChange }: DatePickerProps) => {
  const now = new Date();
  const [date, setDate] = React.useState(value);
  const [decDisabled, setDecDisabled] = React.useState(false);

  const shouldDecDisabled = (newDate: Array<number>) => {
    return newDate[0] === now.getMonth() && newDate[1] === now.getFullYear();
  };

  const handleSetDate = (newDate: Array<number>) => {
    setDate(newDate);
    onChange(newDate);
  };

  const handleDecDate = () => {
    if (decDisabled) return;
    const newMonth = date[0] === 0 ? 11 : date[0] - 1;
    const newYear = date[0] === 0 ? date[1] - 1 : date[1];
    handleSetDate([newMonth, newYear]);
    if (shouldDecDisabled([newMonth, newYear])) setDecDisabled(true);
    else setDecDisabled(false);
  };

  const handleIncDate = () => {
    setDecDisabled(false);
    const newMonth = date[0] === 11 ? 0 : date[0] + 1;
    const newYear = date[0] === 11 ? date[1] + 1 : date[1];
    handleSetDate([newMonth, newYear]);
  };

  return (
    <S.DatePicker>
      <Text variant="label">{label}</Text>
      <Spacing vertical={1} />
      <div className="picker">
        <div
          className={`arrow left ${decDisabled && 'disabled'}`}
          onClick={handleDecDate}
        >
          <ArrowIcon width={16} height={16} />
        </div>
        <div className="content">
          <Text variant="body1">{months[date[0]]}</Text>
          <Text variant="body2">{date[1]}</Text>
        </div>
        <div className="arrow right" onClick={handleIncDate}>
          <ArrowIcon width={16} height={16} />
        </div>
      </div>
    </S.DatePicker>
  );
};

export default DatePicker;
