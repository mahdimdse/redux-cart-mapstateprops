import React, { useState } from 'react';
import { SelectProps, Shop } from '../../../../types';

const SelectField = (props: SelectProps) => {
  const { placeHolder, name, isRequired = false, options, form } = props;

  const [value, setValue] = useState<string>('');

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(event.target.value);
  };

  return (
    <select
      className={'cart-main__form__control cart-main__form__select ml__3 ml__sm__3'}
      value={value}
      onChange={handleChange}
      name={name}
      required={isRequired}
      onInvalid={(e) =>
        e.currentTarget.setCustomValidity(`Please select a ${placeHolder.toLowerCase()}`)
      }
      onInput={(e) => e.currentTarget.setCustomValidity('')}
      form={form}
    >
      <option value=''>Select {placeHolder}</option>
      {options?.length &&
        options.map((option: Shop, key: number) => {
          return (
            <option key={key} value={option.id}>
              {option.name}
            </option>
          );
        })}
    </select>
  );
};

export default SelectField;
