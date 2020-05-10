import React from 'react';
import { Table, List, Button } from 'antd';
import { ActionFunctionAny, Action } from 'redux-actions';
import { LoanModel } from 'stores/loan/models/LoanModel';
import { ListItemProps } from 'antd/lib/list';

interface IProps {
  loans: LoanModel[];
  onRepay: ActionFunctionAny<Action<unknown>>;
}

const columns = (onRepay: ActionFunctionAny<Action<unknown>>) => [
  {
    title: '#',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Principal Amount (SGD)',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Term (months)',
    dataIndex: 'term',
    key: 'term',
  },
  {
    title: 'Remaining Amount (SGD)',
    dataIndex: 'paid',
    key: 'paid',
  },
  {
    title: 'Repayment Frequency',
    dataIndex: 'frequency',
    key: 'frequency',
  },
  {
    title: 'Created Date',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '',
    dataIndex: '',
    key: '',
    render: (record: LoanModel) => RepayButton(record, onRepay),
  },
];

const RepayButton = (record: LoanModel, onRepay: ActionFunctionAny<Action<unknown>>) => (
  <Button type="primary" size="small" danger onClick={() => onRepay(record)}>
    Repay
  </Button>
);

const RenderItem = (item: ListItemProps) => <List.Item>{item.title}</List.Item>;

const ExpendedRowRender = ({ repayHistory }: LoanModel) => (
  <List dataSource={repayHistory} renderItem={RenderItem} />
);

const LoanList: React.FC<IProps> = ({ loans, onRepay }) => (
  <Table
    columns={columns(onRepay)}
    dataSource={loans}
    expandedRowRender={ExpendedRowRender}
    pagination={{ pageSize: 5 }}
    scroll={{ y: 300 }}
  />
);

export default LoanList;
