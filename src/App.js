import React from "react";
import { Reset } from "styled-reset";
import { Row, Col } from "react-flexbox-grid";
import {
  MainTitle,
  MainContainer,
  GlobalStyles,
  BlurBox,
  BlurContainer,
  MainBio,
  TButton,
  ButtonsDialpad
} from "./styles";

const buttons = ['About', 'Projects', 'Discord', 'Github', 'Email']
const Rower = {
  width: '20px'
}
function App() {
  return (
    <React.Fragment>
      <Reset />
      <GlobalStyles />
      <MainContainer>
        <BlurBox>
          <BlurContainer>
            <Row style={{maxWidth: '80%'}} middle="lg" center="xs" start="lg">
              <Col xs={12} lg={6} center="lg">
                <Col center="lg" middle="xs">
                  <MainTitle>Hey, I'm Topik!</MainTitle>
                </Col>
                <Col center="lg" middle="xs">
                  <MainBio>
                    I'm a front-end web developer from Chicago with a strong
                    passion for technology and code.  I have serveral years of experience with making websites for projects and clients.
                  </MainBio>
                </Col>
              </Col>
              <Col middle="lg" center="lg" lg={6}>
                <ButtonsDialpad>
                  <Row center="xs" middle="xs">
                    {buttons.map(btn => ( 
                      <Col lg={6} xs={6} key={btn}>
                        <TButton>{btn}</TButton>
                      </Col>
                    ))}
                  </Row>
                </ButtonsDialpad>
              </Col>
            </Row>
          </BlurContainer>
        </BlurBox>
      </MainContainer>
    </React.Fragment>
  );
}

export default App;
