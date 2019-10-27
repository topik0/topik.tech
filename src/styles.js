import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components';
import background from "./images/background.jpg";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Assistant:400,700,800&display=swap');
`
export const BlurBox = styled.div`
    backdrop-filter: blur(12px);
    width: 50%;
    height: 50vh;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.75);  
`
export const BlurContainer = styled.div`
    
`
export const MainTitle = styled.h1`
    font-size: 20px;
    color: #ececec;
    font-weight: 800;
    font-size: 50px;
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
