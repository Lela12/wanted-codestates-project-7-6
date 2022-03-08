import React, { useContext } from 'react';
import { StepContext } from '../App';
import styled from 'styled-components';

const FirstPage = () => {
  const { currentStep, setCurrentStep } = useContext(StepContext);

  return (
    <Container>
      <CardContainer>
        <SubTitle>어르신 돌보미</SubTitle>
        <Title>케어코디</Title>
      </CardContainer>
      <ButtonContainer onClick={() => setCurrentStep({ ...currentStep, number: 0 })}>
        <LandingButton>신청하기</LandingButton>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  overflow-y: scroll;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 768px;
  min-width: 360px;
  height: 100vh;
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SubTitle = styled.h5`
  width: 210px;
  height: 52px;
  left: 0;
  top: 0;
  margin: 0;
  font-size: 32px;
  font-weight: 400;
  font-style: normal;
  line-height: 52px;
  text-align: center;
  color: ${({ theme }) => theme.fontColor};
`;

const Title = styled.h4`
  width: 130px;
  height: 52px;
  margin: 0;
  top: 52px;
  left: 33px;
  font-size: 32px;
  font-weight: 700;
  line-height: 52px;
  text-align: center;
  font-style: bold;
  color: ${({ theme }) => theme.buttonMain.backgroundColor};
`;

const ButtonContainer = styled.button`
  ${({ theme }) => theme.buttonMain};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 32px 0;
  width: 184px;
  height: 56px;
  top: 136px;
  border-radius: 40px;
  border: none;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  cursor: pointer;
`;

const LandingButton = styled.span`
  width: 80px;
  height: 28px;
  top: 14px;
  left: 58.5px;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
  cursor: pointer;
`;

export default FirstPage;
