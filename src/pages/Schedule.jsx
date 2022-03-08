import styled from 'styled-components';
import { timeList, careTimeList } from '../temp/staticData';
import SelectBox from '../components/SelectBox';

export default function Schedule() {
  return (
    <Container>
      <CalendarWrap>
        <CalendarSection>
          <CalendarSpan>시작일</CalendarSpan>
          <CalendarButton>
            <span>날짜 선택</span>
            <span>아이콘</span>
          </CalendarButton>
        </CalendarSection>
        <CalendarSection>
          <CalendarSpan>종료일</CalendarSpan>
          <CalendarButton>
            <span>날짜 선택</span>
            <span>아이콘</span>
          </CalendarButton>
        </CalendarSection>
      </CalendarWrap>
      <SelectBox name="하루 돌봄 시간" data={timeList} />
      <SelectBox name="돌봄 시작 시간" data={careTimeList} />
      <Notice>
        <p>하루 기본 3시간에서 12시간까지 선택가능합니다.</p>
      </Notice>
    </Container>
  );
}

const Container = styled.div`
  width: 768px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 16px 64px;
  margin: 0 auto;
  position: static;
  left: 0px;
  right: 0px;
  top: 0px;
  color: ${({ theme }) => theme.fontColor};
`;
const CalendarWrap = styled.div`
  display: flex;
  flex-direction: row;
`;
const CalendarSection = styled.div`
  display: flex;
  flex-direction: column;
  &: first-child {
    margin-right: 8px;
  }
`;

const CalendarSpan = styled.span`
  flex: none;
  position: static;
  width: 160px;
  height: 20px;
  left: 0px;
  top: 0px;
  font-weight: bold;
`;

const CalendarButton = styled.button`
  flex: none;
  width: 160px;
  height: 48px;
  position: relative;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  background: ${({ theme }) => theme.inputGray.backgroundColor};
  border-radius: 4px;
  border: 0;
  outline: 0;
  margin-bottom: 16px;
  span {
    color: ${({ theme }) => theme.inputBorder.placeholderTextColor};
    width: 112px;
    heihgt: 20px;
    justify-content: space-between;
  }
  &:hover {
    outline: 1px solid #000000;
  }
`;

const Notice = styled.div`
  width: 328px;
  background: rgb(244, 247, 255);
  padding: 0.5em;
  color: rgb(20, 27, 77);
`;
