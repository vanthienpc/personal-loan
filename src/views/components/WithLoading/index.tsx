import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Spin } from 'antd';
import IStore from 'models/IStore';
import * as LoadingSelector from 'selectors/loading/LoadingSelector';

const mapState = (state: IStore) => ({
  loading: LoadingSelector.loading(state),
});

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector> & ReturnType<typeof Object>;

const withLoading = <P extends object>(ComposedComponent: React.ComponentType<P>) => {
  type Props = PropsFromRedux & P;

  const WithLoading: React.FC<Props> = ({ loading, ...rest }) =>
    loading ? <Spin tip="Loading..." /> : <ComposedComponent {...(rest as P)} />;

  return connector(WithLoading);
};

export default withLoading;
