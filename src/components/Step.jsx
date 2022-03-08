import { useContext, useMemo } from 'react';
import { StepContext } from '../App';
import Footer from '../components/Footer';
import styled, { css } from 'styled-components';
import Header from './Header';
import { STEPS } from '../constants/step';

export default function Step({ children }) {
  const { currentStep, totalStep } = useContext(StepContext);
  const { number } = useMemo(() => currentStep, [currentStep]);
  return (
    number >= 0 && (
      <StepWrap>
        {/* Header */}
        {!currentStep.hideHeader && <Header title="돌보미 신청하기" prev />}
        <ContentWrap>
          {!currentStep.hideTitle && (
            <>
              <StepProgress>
                <StepName>{STEPS[number].stepName}</StepName>
                <StepNumber>
                  <b>{number + 1}</b> / {totalStep}
                </StepNumber>
              </StepProgress>
              <StepTitle>{STEPS[number].stepTitle}</StepTitle>
            </>
          )}
          <Content>{children}</Content>
        </ContentWrap>
        {!currentStep.hideFooter && <Footer />}
      </StepWrap>
    )
  );
}

const StepWrap = styled.div`
  width: 100%;
  height: 100%;
`;

const ContentWrap = styled.main`
  width: 100%;
  padding: 16px;
  height: 100%;
  min-height: 100%;
  overflow-y: auto;
  color: #5b5555;
  ${({ theme }) => css`
    padding-bottom:${theme.footerHeight};
   }`}
`;

const StepProgress = styled.div`
  > * {
    vertical-align: middle;
  }
`;
const StepName = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  margin-right: 4px;
`;
const StepNumber = styled.span`
  ${({ theme }) => css`
    color: ${theme.fontGray};
    font-size: 1rem;
    & > b {
      color: ${theme.mainColor};
    }
  `}
`;

const StepTitle = styled.h1`
  font-size: 1.8rem;
`;

const Content = styled.div`
  width: 100%;
`;
