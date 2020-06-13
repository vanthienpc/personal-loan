import React from 'react';
import { compose } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { ActionFunctionAny, Action } from 'redux-actions';
import IStore from 'models/IStore';
import * as ModalAction from 'stores/modal/ModalAction';
import * as LoanAction from 'stores/loan/LoanAction';
import * as LoanSelector from 'selectors/loan/LoanSelector';
import * as ErrorSelector from 'selectors/error/ErrorSelector';
import withLayout from 'views/components/WithLayout';
import LoanLayout from 'views/components/LoanLayout';
import LoanForm from 'views/components/LoanForm';
import RepayConfirm from 'views/components/RepayConfirm';
import AlertError from 'views/components/AlertError';

const mapState = (state: IStore) => ({
  loans: LoanSelector.getLoanListWithFormat(state),
  error: ErrorSelector.error(state),
});

const mapDispatch = { ...LoanAction, ...ModalAction };

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Home: React.FC<PropsFromRedux> = (props) => {
  const { error, loans, loanFetch, modalOpen, modalClose } = props;

  React.useEffect(() => {
    if (Object.keys(error).length) {
      modalOpen({
        id: 'ErrorModal',
        title: 'Error Information',
        width: 480,
        render: () => <AlertError error={error} />,
      });
    }
  }, [error, modalOpen]);

  const onCreate: ActionFunctionAny<Action<unknown>> = () =>
    modalOpen({
      id: 'CreateLoan',
      title: 'Create Loan',
      width: 480,
      render: () => <LoanForm modalClose={modalClose} />,
    });

  const onRepay: ActionFunctionAny<Action<unknown>> = (record) =>
    modalOpen({
      id: 'Repay',
      width: 350,
      closable: false,
      render: () => <RepayConfirm record={record} modalClose={modalClose} />,
    });

  React.useEffect(() => {
    loanFetch();
  }, [loanFetch]);

  return <LoanLayout loans={loans} onCreate={onCreate} onRepay={onRepay} />;
};

export default compose(withLayout, connector)(Home) as React.ComponentType;
