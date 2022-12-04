import { useState } from 'react';
import { InputFieldProps } from '../../../../types';

const InputField = (props: InputFieldProps) => {
  const {
    placeHolder,
    name,
    isRequired = false,
    isAutoCompleteEnabled = 'off',
    form
  } = props;

  const [value, setValue] = useState('');

  return (
    <input
      className={'cart-main__form__control'}
      name={name}
      value={value}
      placeholder={placeHolder}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      required={isRequired}
      autoComplete={isAutoCompleteEnabled}
      onInvalid={(e) =>
        e.currentTarget.setCustomValidity(`Please enter a ${placeHolder.toLowerCase()} first`)
      }
      onInput={(e) => e.currentTarget.setCustomValidity('')}
      form={form}
    />
  );
};

export default InputField;
