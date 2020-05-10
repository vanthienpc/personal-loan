import React, { useState } from 'react';
import { Input, Select } from 'antd';
import { FieldProps } from 'formik';
import Cleave from 'cleave.js/react';
import {
  InputFieldStyled,
  SelectFieldStyled,
  CurrencyFieldStyled,
  ErrorMessageStyled,
} from './styled';
import { ChangeEvent } from 'cleave.js/react/props';

export const InputField: React.FC<FieldProps & { type: string }> = ({ field, form, ...props }) => {
  const { type } = props;
  const { touched, errors } = form;
  return (
    <InputFieldStyled className={type === 'hidden' ? 'hidden' : ''}>
      <Input {...field} {...props} />
      {touched[field.name] && errors[field.name] && (
        <ErrorMessageStyled>{errors[field.name]}</ErrorMessageStyled>
      )}
    </InputFieldStyled>
  );
};

export const SelectField: React.FC<
  FieldProps & { label: string; options: any; className: string }
> = ({ field, form, ...props }) => {
  const { label, options, className } = props;
  const { touched, errors, setFieldValue } = form;
  const [selected, setSelected] = useState(form.values[field.name] || undefined);

  const handleOnChange = (value: any) => {
    setSelected(value);
    setFieldValue(field.name, value);
  };

  const handleOnBlur = (e: React.FocusEvent<HTMLElement>) => {};

  return (
    <SelectFieldStyled className={className}>
      {label && <span className="label">{label}</span>}
      <Select
        {...field}
        {...props}
        showSearch
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        value={selected || form.values[field.name] || undefined}
      >
        {options.map((opt: any) => (
          <Select.Option key={Math.random()} value={opt.value}>
            {opt.name}
          </Select.Option>
        ))}
      </Select>
      {touched[field.name] && errors[field.name] && (
        <ErrorMessageStyled>{errors[field.name]}</ErrorMessageStyled>
      )}
      <input type="hidden" name={field.name} />
    </SelectFieldStyled>
  );
};

export const CurrencyField: React.FC<
  FieldProps & { label: string; readOnly: boolean; placeholder: string }
> = ({ field, form, ...props }) => {
  const { label } = props;
  const { touched, errors, setFieldValue } = form;
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFieldValue(field.name, e.target.rawValue);
  };

  return (
    <CurrencyFieldStyled>
      {label && <span className="label">{label}</span>}
      <Cleave
        {...field}
        readOnly={props.readOnly}
        placeholder={props.placeholder}
        options={{
          numeral: true,
          numeralThousandsGroupStyle: 'thousand',
          numeralPositiveOnly: true,
          numeralIntegerScale: 9,
          numeralDecimalScale: 4,
        }}
        onChange={handleOnChange}
      />
      {touched[field.name] && errors[field.name] && (
        <ErrorMessageStyled>{errors[field.name]}</ErrorMessageStyled>
      )}
    </CurrencyFieldStyled>
  );
};
