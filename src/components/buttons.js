import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
export const TButtan = styled.a`
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