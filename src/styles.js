import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import background from "./background.jpg";

export const GlobalStyles = createGlobalStyle`
html {
        font-size: 16px;
        @media (max-width: 640px) {
            font-size: 13px;
        }
    }
@import url('https://fonts.googleapis.com/css?family=Assistant:400,700,800&display=swap');
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
