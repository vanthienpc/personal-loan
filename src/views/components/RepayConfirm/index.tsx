import React from 'react';
import styled from 'styled-components';
import { connect, ConnectedProps } from 'react-redux';
import { Button } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import IStore from 'models/IStore';
import * as LoanAction from 'stores/loan/LoanAction';
import * as HelpUtility from 'utilities/HelpUtility';
import { getLoanList } from 'selectors/loan/LoanSelector';
import { ActionFunctionAny, Action } from 'redux-actions';
import { LoanModel } from 'stores/loan/models/LoanModel';

const Container = styled.div`
  padding: 15px 10px;
`;

const QuestionConfirm = styled.div`
  font-size: 16px;
  text-align: center;
  margin-bottom: 15px;
`;

const QuestionIcon = styled(QuestionCircleOutlined)`
  color: #faad14;
  font-size: 20px;
  font-weight: 700;
  margin-right: 10px;
`;

const ActionButtons = styled.div`
  text-align: center;
  button {
    margin: 0 5px;
  }
`;

const mapState = (state: IStore) => ({
  loans: getLoanList(state),
});

const mapDispatch = {
  loanRepay: LoanAction.loanRepay,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector> & {
  record: any;
  modalClose: ActionFunctionAny<Action<unknown>>;
};

const remainAmount = (amount: number, term: string | number) =>
  Number(amount) - Number(amount) / (Number(term) * 4);

const RepayConfirm: React.FC<PropsFromRedux> = ({ loans, record, modalClose, loanRepay }) => {
  const loan: any = loans.find((loan) => loan.id === record.id);

  const handleOK = (
    loan: LoanModel,
    modalClose: ActionFunctionAny<Action<unknown>>,
    loanRepay: any,
  ) => {
    const data = {
      id: loan.id,
      amount: Number(loan.amount),
      paid: remainAmount(loan.paid, loan.term),
      term: loan.term,
      status: loan.status,
      created_at: loan.createdAt,
      repay_amount: Number(loan.repayAmount),
      frequency: 'weekly',
      repay_history: [
        ...loan.repayHistory,
        {
          repay_amount: loan.repayAmount,
          created_at: HelpUtility.formatTimestamp(new Date()),
        },
      ],
    };
    loanRepay(data);
    modalClose({ id: 'Repay' });
  };

  return (
    <Container>
      <QuestionConfirm>
        <QuestionIcon />
        <strong>Do you want to repay weekly?</strong>
      </QuestionConfirm>
      <ActionButtons>
        <Button type="default" onClick={() => modalClose({ id: 'Repay' })}>
          Cancel
        </Button>
        <Button type="primary" danger onClick={() => handleOK(loan, modalClose, loanRepay)}>
          OK
        </Button>
      </ActionButtons>
    </Container>
  );
};

export default connector(RepayConfirm) as React.ComponentType<Partial<PropsFromRedux>>;
