import React from 'react';
import { Reset } from 'styled-reset'
import {MainTitle,MainContainer,GlobalStyles,BlurBox,BlurContainer} from './styles';

function App() {
  return (
    <React.Fragment>
    <Reset />
    <GlobalStyles/>
    <MainContainer>
    <BlurBox>
      <BlurContainer>
        <MainTitle>
          Hey, I'm Topik!
        </MainTitle>
      </BlurContainer>
    </BlurBox>
    </MainContainer>
    </React.Fragment>
  );
}

export default App;
