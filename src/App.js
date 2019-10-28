import React from 'react';
import { Reset } from 'styled-reset'
import {MainTitle,MainContainer,GlobalStyles,BlurBox,BlurContainer,MainBio,ButtonsContainer,TButton,LeftContainer} from './styles';

function App() {
  return (
    <React.Fragment>
    <Reset />
    <GlobalStyles/>
    <MainContainer>
    <BlurBox>
      <BlurContainer>
      <LeftContainer>
        <MainTitle>
          Hey, I'm Topik!
        </MainTitle>
        <MainBio>
          I'm a 15 year old web developer from Chicago with a strong passion for technology and code. I have two years of experience and I know how to make elegant and snappy websites.
        </MainBio>
      </LeftContainer>
        <ButtonsContainer>
          <TButton>
            About
          </TButton>
          <TButton>
            Projects
          </TButton>
          <TButton>
            Discord
          </TButton>
          <TButton>
            Github
          </TButton>
          <TButton>
            Email
          </TButton>
        </ButtonsContainer>
      </BlurContainer>
    </BlurBox>
    </MainContainer>
    </React.Fragment>
  );
}

export default App;
