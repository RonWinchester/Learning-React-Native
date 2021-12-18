import React, { ReactNode } from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  paddingTop: 67px;
  flexDirection: column;
  backgroundColor: #312c39;
  flex: 1;
`;

const Title = styled.Text`
fontStyle: normal;
fontWeight: bold;
fontSize: 34px;
lineHeight: 41px;
color: white;
textAlign: left;
marginLeft: 16px;
marginBottom: 8px;
`

export type TPaymentsTemplate = {
    elementList: ReactNode;
  };

export const PaymentsTemplate: React.FC<TPaymentsTemplate> = ({elementList}) => {
  return (
    <Container>
      <Title>Платежи</Title>
      {elementList}
    </Container>
  );
};
