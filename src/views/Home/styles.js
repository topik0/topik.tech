import styled from 'styled-components';
import { Row } from "react-flexbox-grid";
import {device} from '../../constants/breakpoints.js';

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
        height: 100%;
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
export const ButtonsDialpad = styled.div`
  width: 360px;
  margin: auto;
  max-width: 88.2%;
  @media ${device.mobile}{
        max-width: 100%;
    }
`

export const LeftRow = styled(Row)`
    max-width: 90%;
    @media ${device.mobile}{
        max-width: 85%;
    }
`