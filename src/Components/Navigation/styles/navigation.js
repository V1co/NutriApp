import styled, { keyframes } from 'styled-components';
import { Link as RouterLink }  from "react-router-dom";

const animateIn = keyframes`
  0%   {background-color:#303030; left:600px; top:0px;}
  33%  {background-color:#303030; left:400px; top:0px;}
  66%  {background-color:#303030; left:200px; top:0px;}
  100% {background-color:#303030; left:0px; top:0px;}
`;

const animateOut = keyframes`
  0%   {background-color:#303030; right:600px; top:0px;}
  33%  {background-color:#303030; right:400px; top:0px;}
  66%  {background-color:#303030; right:200px; top:0px;}
  100% {background-color:#303030; right:0px; top:0px;}
`;

export const Container = styled.nav`
    position: fixed;
    background: #303030;
    color: white;
    animation: ${animateOut} 250ms ease-out;
`;

export const ActiveContainer = styled(Container)`
    list-style: none;
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 0;
    padding: 0;
    top: 0;
    animation: ${animateIn} 250ms ease-in;
`

export const Button = styled.button`
    position: absolute;
    top: 38px;
    right: 33px;
    font-size: 50px;
    border-radius: 25px;

    border: 0px solid #F8F8F8;
    background-color: transparent;
    padding: 5px;
    height: 20px;
    outline: none;
    padding: 0;
    margin: 0;
    color: white;
    cursor: pointer;

    &:before {
        transform: rotate(
            90deg
            ) translateX(-6px);
        }
    }

    transform: rotate(
        .625turn
    );
`

export const List = styled.ul`
    list-style: none;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 0;
    padding: 0;
`;

export const Link = styled(RouterLink)`
    color: inherit;
    font-weight: bold;
    font-size: 36px;
    text-decoration: none;
`;