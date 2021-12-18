import React from 'react';
import styled from 'styled-components/native';
import { SearchBar } from '../../molecules/search-bar/SearchBar';
import { SearchBarHeader } from '../../molecules/SearchBarHeader';

type TCompanyListHeader = {
  text: string;
  searchValue: (prop: string)=>void
};

const Container = styled.View`
position: relative;
flexDirection: column;
alignItems: center;
padding: 0 15px 16px;
`;

export const CompanyListHeader: React.FC<TCompanyListHeader> = ({ text, searchValue }) => {
  return (
    <Container>
      <SearchBarHeader text={text} />
      <SearchBar placeholder="Поиск" searchValue={searchValue}/>
    </Container>
  );
};
