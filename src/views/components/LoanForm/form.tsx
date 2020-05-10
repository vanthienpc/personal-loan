import React from 'react';
import styled from 'styled-components';
import { Alert, Button } from 'antd';
import { LOAN_TERM } from 'constants/loan';
import { Form, Field, FormikProps, FormikValues } from 'formik';
import { CurrencyField, SelectField } from '../DataEntry';

const UnorderedList = styled.ul`
  margin: 0;
  padding: 0;
`;

const AlertBox = styled(Alert)`
  margin-bottom: 15px;
`;

const FieldData = styled(Field)`
  width: 100%;
`;

const Notice: JSX.Element = (
  <UnorderedList>
    <li>
      Repayment frequency is <strong>weekly</strong>
    </li>
    <li>
      Interest rate is <strong>5%</strong>
    </li>
  </UnorderedList>
);

const FormData: React.FC<FormikProps<FormikValues>> = (props) => {
  const { isSubmitting, isValidating } = props;
  return (
    <Form>
      <AlertBox message="Informational Notes" description={Notice} type="info" showIcon />
      <FieldData
        type="number"
        name="amount"
        label="Principal Amount (SGD)"
        placeholder="Amount (SGD)"
        component={CurrencyField}
      />
      <FieldData
        name="term"
        label="Loan Term (Months)"
        placeholder="Choose a loan term"
        options={LOAN_TERM}
        component={SelectField}
      />
      <Button
        type="primary"
        htmlType="submit"
        block
        size="large"
        loading={isSubmitting && isValidating}
      >
        Submit
      </Button>
    </Form>
  );
};

export default FormData;
