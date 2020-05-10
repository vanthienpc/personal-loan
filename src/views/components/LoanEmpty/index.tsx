import React from 'react';
import { Empty } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px 0;
`;

const LoanEmpty: React.FC = () => (
  <Container>
    <Empty description="There is no loan. Click create loan button to request loan." />
  </Container>
);

export default LoanEmpty;
