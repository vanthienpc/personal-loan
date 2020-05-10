import React from 'react';
import styled from 'styled-components';
import { PageHeader, Button } from 'antd';
import { ActionFunctionAny, Action } from 'redux-actions';
import { LoanModel } from 'stores/loan/models/LoanModel';
import withLoading from '../WithLoading';
import LoanEmpty from '../LoanEmpty';
import LoanList from '../LoanList';

interface IProps {
  loans: LoanModel[];
  onCreate?: ActionFunctionAny<Action<unknown>>;
  onRepay: ActionFunctionAny<Action<unknown>>;
}

const Container = styled.div`
  padding: 30px;
  height: 100%;
  background-color: #ffffff;
`;

const CreateButton = (onCreate?: ActionFunctionAny<Action<unknown>>) => (
  <Button key={Math.random()} type="primary" onClick={onCreate}>
    Create Loan
  </Button>
);

const Header: React.FC<Partial<IProps>> = ({ onCreate }) => (
  <PageHeader title="Your Loans History" extra={[CreateButton(onCreate)]} />
);

const Content: React.FC<IProps> = ({ loans, onRepay }) =>
  !loans.length ? <LoanEmpty /> : <LoanList loans={loans} onRepay={onRepay} />;

const LoanLayout: React.FC<IProps> = ({ loans, onCreate, onRepay }) => (
  <Container>
    <Header onCreate={onCreate} />
    <Content loans={loans} onRepay={onRepay} />
  </Container>
);

export default withLoading(LoanLayout) as React.ComponentType<IProps>;
