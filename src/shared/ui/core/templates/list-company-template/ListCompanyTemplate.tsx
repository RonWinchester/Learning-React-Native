import React, { ReactNode } from 'react';
import styled from 'styled-components/native';
import { CompanyListHeader } from '../../organisms/CompanyListHeader/CompanyListHeader';
import { ElementList } from '../../organisms/element-list/ElementList';

const Container = styled.View`
flex: 1;
flexDirection: column;
backgroundColor: #312C39;
paddingTop: 30px;
`;

export type TListCompanyTemplate = {
  header: ReactNode;
  elementList: ReactNode;
};

export const ListCompanyTemplate: React.FC<TListCompanyTemplate> = ({
  header,
  elementList,
}) => {
  return (
    <Container>
      {header}
      {elementList}
    </Container>
  );
};
