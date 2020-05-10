import React from 'react';
import { compose } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { ActionFunctionAny, Action } from 'redux-actions';
import IStore from 'models/IStore';
import * as ModalAction from 'stores/modal/ModalAction';
import * as LoanAction from 'stores/loan/LoanAction';
import * as LoanSelector from 'selectors/loan/LoanSelector';
import withLayout from 'views/components/WithLayout';
import LoanLayout from 'views/components/LoanLayout';
import LoanForm from 'views/components/LoanForm';
import RepayConfirm from 'views/components/RepayConfirm';

const mapState = (state: IStore) => ({
  loans: LoanSelector.getLoanListWithFormat(state),
});

const mapDispatch = { ...LoanAction, ...ModalAction };

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Home: React.FC<PropsFromRedux> = (props) => {
  const { loans, loanFetch, modalOpen, modalClose } = props;

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
