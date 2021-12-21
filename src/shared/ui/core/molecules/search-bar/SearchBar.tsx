import React from 'react';
import styled from 'styled-components/native';
import { Search, TSearchBar } from '../../atoms/Search/Search';

const SearchIcon = styled.Image`
position: absolute;
left: 28px;
top: 48px;
zIndex: 2;
width: 24px;
height: 24px;
`

export const SearchBar: React.FC<TSearchBar> = ({ placeholder }) => {
  return (
    <>
      <SearchIcon source={require('../../../../../assets/icons/search.png')} />
      <Search placeholder={placeholder}/>
    </>
  );
};
