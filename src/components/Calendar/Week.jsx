import React from 'react';
import styled from 'styled-components';

const Week = ({ children }) => {
  return <StyledWeek>{children}</StyledWeek>;
};

const StyledWeek = styled.div`
  display: flex;
`;

export default Week;
