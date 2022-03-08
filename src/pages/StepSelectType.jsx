import React from 'react';
import { FooterContext, StepContext } from '../App';
import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import { css } from 'styled-components';

export default function SelectTimeType({ type }) {
  const { currentStep, setCurrentStep } = useContext(StepContext);
  const { setActiveNext } = useContext(FooterContext);
  const [isPartTime, setIsPartTime] = useState(false);
  const [isAlldayTime, setIsAlldayTime] = useState(false);

  useEffect(() => {
    setCurrentStep({
      ...currentStep,
      stepName: '돌봄 유형',
      stepTitle: '돌봄 유형을 설정해주세요 ',
    });
  }, []);

  const timeClick = () => {
    setIsPartTime(!isPartTime);
    setIsAlldayTime(null);
  };

  const twoFourClick = () => {
    setIsAlldayTime(!isAlldayTime);
    setIsPartTime(null);
  };

  return (
    <Container>
      <TypeContainer>
        <TypeButton selectd={isAlldayTime} onClick={twoFourClick}>
          <Icon>🌞</Icon>
          <Body3>24시간 상주</Body3>
        </TypeButton>
        <TypeButton selectd={isPartTime} onClick={timeClick}>
          <Icon>⏰</Icon>
          <Body3>시간제 돌봄</Body3>
        </TypeButton>
      </TypeContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
`;

const TypeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-grow: 1;
`;

const TypeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 200px;
  margin: 1px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  padding: 0;
  cursor: pointer;
  ${(props) =>
    props.selectd &&
    css`
      background: ${props.theme.mainColor};
      color: #ffffff;
    `}
`;

const Icon = styled.h1`
  font-size: 48px;
  line-height: 68px;
  text-align: center;
  left: 56px;
  top: 24px;
  margin: 8px 8px;
`;

const Body3 = styled.span`
  text-align: center;
  line-height: 20px;
  font-weight: 700;
  font-size: 14px;
  margin: 8px 0px;
`;
