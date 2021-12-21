import { serachQuery } from '../../../../../models/searchQuery';
import React from 'react';
import styled from 'styled-components/native';

export type TSearchBar = {
    placeholder: string;
  };

const SearchInput = styled.TextInput`
  width: 100%;
  borderWidth: 0;
  borderRadius: 8px;
  backgroundColor: #403a47;
  paddingHorizontal: 8px;
  padding-left: 36px;
  paddingVertical: 8px;
  line-height: 18px;
  color: #706d76;
  font-size: 15px;
`;

export const Search: React.FC<TSearchBar> = ({ placeholder }) => {
    const [value, setValue] = React.useState('');

    function handleQuery (e: string) {
      setValue(e);
      serachQuery(e)
    }
    return (
        <SearchInput
          value={value}
          onChangeText={(e)=>handleQuery(e)}
          placeholder={placeholder}
          placeholderTextColor="#706d76"
        ></SearchInput>
    );
  };