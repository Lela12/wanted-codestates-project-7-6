import React from 'react';
import styled from 'styled-components';

function ErrorPage() {
  return (
    <Error>
      <div>
        <h1>👨‍⚕️</h1>
        <h2>에러가 발생하였습니다.</h2>
        <h5>관리자에게 문의해주세요!</h5>
      </div>
    </Error>
  );
}

export default ErrorPage;

const Error = styled.div`
  display: grid;
  place-items: center;
  min-height: 60vh;
  color: ${(props) => props.theme.mainColor};
  border: 1px solid ${(props) => props.theme.mainColor};
`;
