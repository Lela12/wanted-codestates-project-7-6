import { useState } from 'react';
import styled from 'styled-components';
import { Caption2 } from './Text';

const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;

  &[disabled] {
    opacity: 0.5;
    pointer-events: none;
  }
`;

const Input = styled.input`
  padding: 8px 16px;
  border: ${({ theme }) => theme.inputBorder.border};
  border-radius: 4px;
  flex-grow: 1;
  margin-right: 8px;

  &::placeholder {
    color: ${({ theme }) => theme.fontColor};
    font-size: 14px;
    line-height: 20px;
  }
`;

const Button = styled.button`
  padding: 8px 16px;
  white-space: nowrap;
  color: ${({ theme }) => theme.mainColor};
  background-color: white;
  border: 2px solid ${({ theme }) => theme.mainColor};
  border-radius: 4px;

  &[disabled] {
    opacity: 0.5;
    pointer-events: none;
  }
`;

const Message = styled(Caption2)`
  flex-basis: 100%;
`;

export default function Form({
  onSubmit,
  placeholder,
  title,
  filter,
  disabled = false,
  message = '',
}) {
  const [value, setValue] = useState('');

  const onKeyDown = (event) => {
    if (!filter) return;
    if (!['Backspace'].includes(event.key) && !filter.test(event.key)) {
      event.preventDefault();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    value && onSubmit(value);
  };

  return (
    <FormContainer onSubmit={handleSubmit} disabled={disabled}>
      <Input
        type="text"
        value={value}
        onChange={({ target: { value } }) => setValue(value)}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
      />
      <Button type="submit" disabled={!value}>
        {title}
      </Button>
      <Message>{message}</Message>
    </FormContainer>
  );
}
