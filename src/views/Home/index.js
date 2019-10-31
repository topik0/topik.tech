import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import {
  MainTitle,
  BlurBox,
  BlurContainer,
  MainBio,
  TButton,
  ButtonsDialpad,
  LeftRow
} from "./styles";

// const buttons = ['About', 'Projects', 'Discord', 'Github', 'Email']
const buttons = [{ label: 'About', url: '/about' }, { label: 'Projects', url: '/projects' }, { label: 'Discord', url: 'https://discord.gg/cBYRVps' }, { label: 'Github', url: 'https://www.github.com/topik0' }, { label: 'Email', url: 'mailto:topik@topik.tech' }]

const Home = () => (
  <BlurBox>
    <BlurContainer>
      <LeftRow middle="lg" center="xs" start="lg">
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
                  <TButton to={btn.url}>{btn.label}</TButton>
                </Col>
              ))}
            </Row>
          </ButtonsDialpad>
        </Col>
      </LeftRow>
    </BlurContainer>
  </BlurBox>
)

export default Home