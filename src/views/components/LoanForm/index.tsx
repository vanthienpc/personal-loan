import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { ActionFunctionAny, Action } from 'redux-actions';
import { Formik, FormikProps, FormikValues } from 'formik';
import * as Yup from 'yup';
import * as LoanAction from 'stores/loan/LoanAction';
import * as HelpUtility from 'utilities/HelpUtility';
import FormData from './form';

const mapDispatch = {
  loanCreate: LoanAction.loanCreate,
};

const connector = connect(null, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector> & {
  modalClose: ActionFunctionAny<Action<unknown>>;
};

interface ILoanFormValues {
  amount?: number;
  term?: number;
  frequency: string;
}

const LoanForm: React.FC<PropsFromRedux> = ({ loanCreate, modalClose }) => {
  const initialValues: ILoanFormValues = {
    amount: undefined,
    term: undefined,
    frequency: 'weekly',
  };

  const validationSchema = Yup.object().shape({
    amount: Yup.number().required('Required'),
    term: Yup.number().required('Required'),
  });

  const handleOnSubmit = (values: ILoanFormValues) => {
    const data = {
      amount: Number(values.amount),
      paid: Number(values.amount),
      term: String(values.term),
      frequency: values.frequency,
      status: 'approved',
      repay_amount: HelpUtility.amountPaid(Number(values.amount), values.term || 0, 5),
      created_at: HelpUtility.formatTimestamp(new Date()),
      repay_history: [],
    };
    loanCreate(data);
    modalClose({ id: 'CreateLoan' });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => handleOnSubmit(values)}
    >
      {(props: FormikProps<FormikValues>) => <FormData {...props} />}
    </Formik>
  );
};

export default connector(LoanForm) as React.ComponentType<Partial<PropsFromRedux>>;
