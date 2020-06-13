import React from 'react';
import { Layout } from 'antd';
import { GlobalStyled } from '../GlobalStyled';
import withModal from '../WithModal';

const { Header, Content, Footer } = Layout;

const withLayout = <P extends object>(ComposedComponent: React.ComponentType<P>) => {
  const WithLayout: React.FC<P> = (props) => (
    <Layout>
      <GlobalStyled />
      <Header>
        <h1>Personal Loan Application</h1>
      </Header>
      <Content>
        <ComposedComponent {...(props as P)} />
      </Content>
      <Footer>@2019 Created by Thien Vo</Footer>
    </Layout>
  );

  return withModal(WithLayout);
};

export default withLayout;
