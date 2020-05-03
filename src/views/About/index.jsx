import React from "react";
import { MainTitle } from "../../styles.js";
import projectImage from "../../black.jpg";
import amiImage from "../../ami.jpg"
import githubImage from "../../github.png"
import {
  AboutBlurBox,
  MainContainerAbout,
  BlurContainer,
  MainBio,
  SkillsBio,
  DividerLine,
  ProjectContainer,
  ProjectBox,
  ProjectTitle,
  ProjectDescription,
  ProjectImage,
  ProjectTextContainer,
  ProjectLinkContainer,
  ProjectLinkText
} from "./styles";
const mainBio = "I am an experienced web developer from Chicago with a strong passion for technology and programming.  I've been programming since I was ten and I have (hopefully) gotten much better since.  I started programming by making basic websites and web applications for school and myself.  Now, I am taking on many projects for clients and solutions that can help many people.  One of my main goals is to solve problems that I've had trouble with.  Check out my projects if you'd like to see what I'm working on or my past projects, and feel free to join my Discord or email me if you'd like to chat.";
const skillsbio = "I'm experienced with webdev languages and frameworks such as HTML/CSS, React, and JS, UNIX based systems, and Java.  I'm always working to improve my current skills and as of now I am practicing C++.";
const amiBio = "Ami was a Discord bot written in Java that had robust features that were unique to it, such as full server backups and large music support.  Unfortunately, this project ended in June 2019 and the source was lost.";
const templatesBio = "I post the source code to many sites I make, as long as standalone templates that you are free to use.  The templates are built with quality code & design and are designed to work well on any device.";
const appaysBio = "Appays is an uncoming website and service that will allow you to learn the world.  Every two weeks a country is chosen to learn about.  Appays will have many resources to make learning the world fun and simple.";
const About = () => (
  <MainContainerAbout>
    <ProjectContainer>
    <AboutBlurBox>
      <BlurContainer>
        <MainTitle> About Me </MainTitle>
        <MainBio> {mainBio} </MainBio>
        <DividerLine> </DividerLine>
        <SkillsBio> {skillsbio} </SkillsBio>
      </BlurContainer>
    </AboutBlurBox>
      <ProjectBox>
        <ProjectImage src={amiImage} />
        <ProjectTextContainer>
          <ProjectTitle>Ami Discord Bot</ProjectTitle>
          <ProjectDescription>
            {amiBio}  
          </ProjectDescription>
        </ProjectTextContainer>
      </ProjectBox>
      <ProjectBox>  
        <ProjectImage src={projectImage} />
        <ProjectTextContainer>
          <ProjectTitle>Appays</ProjectTitle>
          <ProjectDescription>
            {appaysBio}
          </ProjectDescription>
        </ProjectTextContainer>
      </ProjectBox>
      <ProjectBox>
        <ProjectImage src={githubImage} />
        <ProjectTextContainer>
          <ProjectTitle>Templates</ProjectTitle>
          <ProjectDescription>
            {templatesBio}
          </ProjectDescription>
        <ProjectLinkContainer>
          <ProjectLinkText href="https://github.com/topik0">Github</ProjectLinkText>
        </ProjectLinkContainer>
        </ProjectTextContainer>
      </ProjectBox>
    </ProjectContainer>
  </MainContainerAbout>
);

export default About;
