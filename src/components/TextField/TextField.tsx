import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import MaterialTextField from '@material-ui/core/TextField';
import { NumberFormatCustom } from '../../components/NumberFormatCustom';

type TextFieldProps = {
    label: string,
    adornment: string,
    placeholder: string,
    value: number,
    defaultValue: number,
    onChange: Function
};

const TextField = ({ label, adornment, placeholder, value, defaultValue, onChange }: TextFieldProps) => (
    <MaterialTextField
        label={label}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        InputProps={{
            startAdornment: <InputAdornment position="start">{adornment}</InputAdornment>,
            inputComponent: NumberFormatCustom as any
        }}
    />
);

export default TextField;