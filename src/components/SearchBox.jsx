import styled, { css } from 'styled-components';
import { ReactComponent as Search } from '../assets/search_icon.svg';

const SearchInput = ({ readOnly, handleBoxClick, placeholder, value = '', onChange }) => {
  return (
    <InputBox readOnly onClick={() => readOnly && handleBoxClick()}>
      <Search style={{ cursor: 'pointer' }} />
      {readOnly ? (
        <Text isExist={value}>{value || placeholder}</Text>
      ) : (
        <Input placeholder={placeholder} value={value} onChange={onChange} />
      )}
    </InputBox>
  );
};

export default SearchInput;
const InputBox = styled.div`
  display: flex;
  align-items: center;
  > svg + * {
    border: none;
    margin-left: 0.6rem !important;
    flex: 1;
    outline: none;
    font-size: 14px;
    line-height: 16px;
    padding: 1px 2px;
  }

  ${({ theme, readOnly }) => css`
    ${theme.inputBorder}
    cursor: ${readOnly && 'pointer'};
    &:focus-within {
      border-color: ${theme.mainColor};
    }
  `}
`;

const Input = styled.input``;

const Text = styled.p`
  margin: 0;
  color: ${(props) => !props.isExist && '#B6B3B3'};
`;
