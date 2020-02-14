import styled from "styled-components";
import { device } from "../../constants/breakpoints.js";
import background from "../../background.jpg";

export const MainContainerAbout = styled.div`
  font-family: Assistant, sans-serif;
  padding: 0;
  margin: 0;
  background-image: url(${background});
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: start;
  color: white;
`
export const AboutBlurBox = styled.div`
  backdrop-filter: blur(12px);
  width: 100%;
  min-height: 820px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.75);
  color: #ececec;
  max-width: 400px;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 35px;
  margin-bottom: 35px;
  align-items: center;
  @media ${device.mobile} {
    min-height: 400px;
    width: 375px;
    max-width: 85%;
  }
`
export const BlurContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px; 
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`
export const MainBio = styled.h2`
  font-size: 1.3rem;
  width: 85%;
  margin: 12px;
  text-shadow: 0px 0px 2px black;
`
export const SkillsBio = styled.h2`
  font-size: 1.3rem;
  width: 85%;
  margin: 12px;
  margin-bottom: 20px;
  text-shadow: 0px 0px 2px black;
`
export const DividerLine = styled.div`
  width: 67%;
  background-color: white;
  height: 3px;
  margin: 15px;
  border-radius: 300px;
`
export const ProjectContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  min-width: 100%;
  min-height: 100%;
  max-height: 100%;
  max-width: 100%;
  justify-content: center;
  align-items: center;
`
export const ProjectBox = styled.div`
  width: 30%;
  height: 375px;
  max-width: 250px;
  min-width: 250px;
  max-height: 370px;
  backdrop-filter: blur(20px);
  border-radius: 25px;
  margin: 20px;
`
export const ProjectTitle = styled.p`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 5px;
  text-shadow: 0px 0px 2px black;
`
export const ProjectDescription = styled.p`
  font-size: 18px;
  text-shadow: 0px 0px 2px black;
`
export const ProjectImage = styled.img`
  border-radius: 25px;
  width: 100%;
  height: 115px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  object-fit: cover;
`
export const ProjectTextContainer = styled.div`
  width: 90%;
  margin: 10px;
`
export const ProjectLinkContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 20px;
`
export const ProjectLinkText = styled.a`
  font-weight: 700;
  font-size: 18px;
`