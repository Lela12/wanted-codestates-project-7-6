import React from 'react';
import styled from 'styled-components';
import CalenderView from './Calendar/CalenderView';
import { DateProvider } from '../context/DateContext';
import { ReactComponent as CloseIcon } from '../assets/close_icon.svg';

const ScheduleModal = () => {
  return (
    <DateProvider>
      <ScheduleModalStyled>
        <Header>
          <p>돌봄 날짜 선택</p>
          <CloseButton />
        </Header>
        <CalenderView />
      </ScheduleModalStyled>
    </DateProvider>
  );
};

const ScheduleModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  font-size: 16px;
  line-height: 1.62;
  border-bottom: 1px solid ${({ theme }) => theme.backgroundGray};
  position: relative;
`;

const CloseButton = styled(CloseIcon)`
  cursor: pointer;
  position: absolute;
  right: 16px;
`;

export default ScheduleModal;
