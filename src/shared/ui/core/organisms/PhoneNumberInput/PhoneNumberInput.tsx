import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
padding: 16px;
background: #352F3D;
position: relative;
margin-bottom: 36px;
`;

const SearchInput = styled.TextInput`
  width: 100%;
  borderWidth: 0;
  borderRadius: 26px;
  backgroundColor: #3B3542;
  paddingHorizontal: 8px;
  padding-left: 64px;
  paddingVertical: 8px;
  line-height: 20px;
  color: #706d76;
  font-size: 15px;
`;

const Icon = styled.Image`
    width: 24px;
    height: 24px;
    z-index: 2;
    position: absolute;
    left: 40px;
    top: 25px;
`;

type TPhoneNumberInput = {
  placeholder: string;
  uri: string;
  setNumber: (props:string)=>void
};
export const PhoneNumberInput: React.FC<TPhoneNumberInput> = ({
  placeholder, uri, setNumber
}) => {
  const [value, setValue] = React.useState('');

  setNumber(value)

  return (
    <Container>
        <Icon source={{uri}}/>
      <SearchInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        placeholderTextColor="#706d76"
        keyboardType='numeric'
        maxLength={12}
        autoCompleteType='tel'
        onFocus={()=>setValue('+7')}
      ></SearchInput>
    </Container>
  );
};
