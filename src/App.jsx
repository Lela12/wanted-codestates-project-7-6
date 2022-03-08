import { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import theme from './styles/theme';
import Step from './components/Step';
import { TOTAL_STEP } from './constants/step';
import StepAddress from './pages/StepAddress';
import FirstPage from './pages/FirstPage';
import Schedule from './pages/Schedule';
import StepApplymentBrief from './pages/StepApplymentBrief';
import StepSelectType from './pages/StepSelectType';

const step = [<StepSelectType />, <Schedule />, <StepAddress />, <StepApplymentBrief />];

export default function App() {
  const [currentStep, setCurrentStep] = useState({ number: -1 });
  const [activeNext, setActiveNext] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <StepContext.Provider value={{ totalStep: TOTAL_STEP, currentStep, setCurrentStep }}>
        <FooterContext.Provider value={{ activeNext, setActiveNext }}>
          {currentStep.number < 0 ? <FirstPage /> : <Step>{step[currentStep.number]}</Step>}
          <GlobalStyle />
        </FooterContext.Provider>
      </StepContext.Provider>
    </ThemeProvider>
  );
}

export const StepContext = createContext({
  currentStep: {
    totalStep: 0,
    number: null,
    hideFooter: false,
    hideTitle: false,
    hideHeader: false,
  },
  setCurrentStep: () => {},
});

export const FooterContext = createContext({
  activeNext: false,
  setActiveNext: () => {},
});
