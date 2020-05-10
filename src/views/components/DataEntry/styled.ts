import styled from 'styled-components';

export const InputFieldStyled = styled.div`
  position: relative;
  display: flex;
  height: 50px;
  margin-bottom: 30px;
  border: solid 1px #c8c8c8;
  background-color: #ffffff;
  &.hidden {
    display: none;
  }
  input {
    flex: 1;
    border: none;
    padding: 0 16px;
    width: 100%;
  }
  input[type='number'] {
    appearance: none;
    -moz-appearance: textfield;
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -moz-appearance: textfield;
    -webkit-appearance: none;
  }
`;

export const SelectFieldStyled = styled.div`
  margin-bottom: 15px;
  .label {
    display: block;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .ant-select-selection,
  .ant-select-selection__rendered {
    height: 35px;
  }
  .ant-select-selection__placeholder {
    margin-top: -12px;
  }
`;

export const CurrencyFieldStyled = styled.div`
  margin-bottom: 15px;
  .label {
    display: block;
    font-weight: 700;
    margin-bottom: 10px;
  }
  input[type='text'] {
    outline: none;
    width: 100%;
    border-radius: 4px;
    border: solid 1px #d9d9d9;
    background: #ffffff;
    padding: 6px 12px;
    &::placeholder {
      color: #bfbfbf;
    }
  }
`;

export const ErrorMessageStyled = styled.div`
  color: #ff0000;
  margin-top: 10px;
`;
