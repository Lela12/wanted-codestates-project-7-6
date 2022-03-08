import { useContext, useCallback } from 'react';
import { StepContext, FooterContext } from '../App';
import styled, { css } from 'styled-components';
import { TOTAL_STEP } from '../constants/step';

export default function Footer() {
  const { currentStep, setCurrentStep } = useContext(StepContext);
  const { activeNext } = useContext(FooterContext);
  const moveStep = useCallback(
    (value) => {
      setCurrentStep(({ number }) =>
        number === TOTAL_STEP - 1
          ? { ...currentStep, number: -1 }
          : { ...currentStep, number: currentStep.number + value }
      );
    },
    [currentStep, setCurrentStep]
  );
  return (
    <FooterWrap>
      <Button onClick={() => moveStep(-1)}>이전</Button>
      <Button type="main" disabled={!activeNext} onClick={() => moveStep(1)}>
        다음
      </Button>
    </FooterWrap>
  );
}

const FooterWrap = styled.footer`
  width: 100%;
  height: ${(props) => props.theme.footerHeight};
  padding: 8px;
  position: absolute;
  bottom: 0;
  background-color: white;
  z-index: 10;
`;
const Button = styled.button`
  height: 100%;
  font-size: 1rem;
  ${({ type, theme, disabled }) => css`
    ${type === 'main' ? theme.buttonMain : theme.buttonWhite}
    width:${type === 'main' ? 'calc(82% - 1rem)' : '18%'};
    min-width: fit-content;
    margin-left: ${type === 'main' && '8px'};
    ${disabled && theme.buttonGray};
    cursor: ${disabled && 'default'};
  `}
`;
