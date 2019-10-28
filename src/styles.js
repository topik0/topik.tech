import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components';
import background from "./images/background.jpg";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Assistant:400,700,800&display=swap');
`
const size = {
    mobile: '750px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }
export const device = {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
  };
export const BlurBox = styled.div`
    backdrop-filter: blur(12px);
    width: 100%;
    height: 50vh;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.75);  
    color: #ececec;
    margin: 20px;
    max-width: 800px;
    @media ${device.mobile}{
        max-height: 87vh;
        min-height: 70vh;
        height: 100%;
    }
`
export const BlurContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 50px;
    @media ${device.mobile}{
        flex-direction: column;
        padding: 20px;
        text-align: center;
        height: 100%;
    }
`
export const MainTitle = styled.h1`
    font-weight: 800;
    font-size: 55px;
`
export const MainBio = styled.p`
    width: 80%;
    padding-top: 12px;
    font-size: 22px;    
`
export const LeftContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    width: 100%;
    text-align: left;
    word-wrap: break-word;
    @media ${device.mobile}{
        align-items: center;
        text-align: center;
    }
`
export const ButtonsContainer = styled.div`
    padding-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: wrap;

`
export const TButton = styled.a`
    width: 160px;
    height: 48px;
    font-size: 19px;
    border: 4px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .3s;
    user-select: none;
    cursor: pointer;
    font-weight: 700;
    margin-right: 7.5px;
    margin-left: 7.5px;
    margin-top: 15px;
    &:hover{
        transition: .3s;
        background-color: #fff;
        color: #333;
    }
    &:active{
        box-shadow:
        height: 100%; inset 0px 10px 22px -18px rgba(0, 0, 0, 0.45);
    }
    @media ${device.mobile}{
        width: 100px;
    }
    
`
export const MainContainer = styled.div`
    font-family: Assistant, sans-serif;
    padding: 0;
    margin: 0;
    background-image: url(${background});
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
`
