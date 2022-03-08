import styled from 'styled-components';
import theme from '../styles/theme';

export default function SelectBox({ name, data }) {
  return (
    <SelectWrapStyled>
      <label>{name}</label>
      <select name={name}>
        <option value="none">선택</option>
        {data.map((el) => (
          <option key={el.id} value={el.value}>
            {el.text}
          </option>
        ))}
      </select>
    </SelectWrapStyled>
  );
}

const SelectWrapStyled = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  width: 328px;
  label {
    font-weight: bold;
  }
  select {
    border: 0;
    outline: 0;
    width: 100%;
    height: 48px;
    padding: 0 16px;
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.fontColor};
    background: ${({ theme }) => theme.inputGray.backgroundColor};
  }
  select:focus {
    outline: 1px solid ${({ theme }) => theme.fontColor};
  }
`;
