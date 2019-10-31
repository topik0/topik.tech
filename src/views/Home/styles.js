import styled from 'styled-components';
import { Row } from "react-flexbox-grid";
import background from "../../../src/background.jpg";
import {device} from '../../constants/breakpoints.js';
import { Link } from 'react-router-dom';


export const BlurBox = styled.div`
    backdrop-filter: blur(12px);
    width: 100%;
    min-height: 450px;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.75);  
    color: #ececec;
    max-width: 800px;
    max-height: 50vh;
    @media ${device.mobile}{
        max-height: 87vh;
        min-height: 70vh;
        height: 100%;#
        width: 375px;
        max-width: 85vw;
    }
`
export const BlurContainer = styled.div`
    display: flex;
    justify-content: center;
`
export const MainTitle = styled.h1`
    font-weight: 800;
    font-size: 3.4rem;
`
export const MainBio = styled.p`
    font-size: 1.55rem;
    margin-top: 13px;
`
export const TButton = styled(Link)`
    min-width: 5em;
    max-width: 100%;
    width: 8.4rem;
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
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
    &:hover{
        transition: .3s;
        background-color: #fff;
        color: #333;
    }
    &:active{
        box-shadow: inset 0px 10px 22px -18px rgba(0, 0, 0, 0.45);
    }
`
export const ButtonsDialpad = styled.div`
  width: 360px;
  margin: auto;
  max-width: 88.2%;
  @media ${device.mobile}{
        max-width: 100%;
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
export const LeftRow = styled(Row)`
    max-width: 90%;
    @media ${device.mobile}{
        max-width: 85%;
    }
`