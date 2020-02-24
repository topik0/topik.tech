import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { MainContainer, MainTitle } from "../../styles.js";
import { TButton, TButtan } from "../../components/buttons.js"
import { Helmet } from "react-helmet";
import {
  BlurBox,
  BlurContainer,
  MainBio,
  ButtonsDialpad,
  LeftRow
} from "./styles";

const buttons = [{ label: 'About', url: '/about' }, { label: 'Discord', url: 'https://discord.gg/D5aMzpN', external: true }, { label: 'Github', url: 'https://www.github.com/topik0', external: true }, { label: 'Email', url: 'mailto:topik@topik.tech', external: true }, { label: 'Guides', url: 'https://www.medium.com/topik0', external: true }];
const Home = () => (
  <MainContainer>
    <Helmet>
      <title>Hey, I'm Topik!</title>
    </Helmet>
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
                    {btn.external ? <TButtan href={btn.url}>{btn.label}</TButtan> : <TButton to={btn.url}>{btn.label}</TButton>}
                  </Col>
                ))}
              </Row>
            </ButtonsDialpad>
          </Col>
        </LeftRow>
      </BlurContainer>
    </BlurBox>
  </MainContainer>
)

export default Home