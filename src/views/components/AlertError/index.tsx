import React from 'react';
import { Alert } from 'antd';
import IErrorState from 'stores/error/models/IErrorState';

interface IProps {
  error: IErrorState;
}

const AlertError: React.FC<IProps> = ({ error }) => {
  const latestError = Object.values(error)[Object.keys(error).length - 1];
  const { message } = latestError;
  return <Alert message={message} type="error" showIcon />;
};

export default AlertError;
