import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import MaterialTextField from '@material-ui/core/TextField';
import NumberFormat from 'react-number-format';

interface NumberFormatCustomProps {
    inputRef: (instance: NumberFormat | null) => void;
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
  }
  
  function NumberFormatCustom(props: NumberFormatCustomProps) {
    const { inputRef, onChange, ...other } = props;
  
    return (
      <NumberFormat
        {...other}
        getInputRef={inputRef}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        isNumericString
        allowNegative={false}
        decimalScale={0}
      />
    );
  }
  
  interface State {
    textmask: string;
    numberformat: string;
  }

type ButtonProps = {
    label: string,
    adornment: string,
    placeholder: string,
};

const TextField = ({ label, adornment, placeholder }: ButtonProps) => {
    const adornmentProps = {
        startAdornment: <InputAdornment position="start">{adornment}</InputAdornment>,
    };
    const inputProps = {
        //inputComponent

    };
    if (!!adornment) inputProps
    return (
        <MaterialTextField
            label={label}
            placeholder={placeholder}
            InputProps={{
                startAdornment: <InputAdornment position="start">{adornment}</InputAdornment>,
                inputComponent: NumberFormatCustom as any
            }}
        />
    )
};

export default TextField;