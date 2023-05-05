import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonBack = styled(NavLink)`
display: flex;
text-decoration: none;
border: solid 1px black;
border-radius: 10px;
color: #373737;
background: #EBD8FF;
font-weight: 500;
width: 76px;
height: 34px;
justify-content: center;
align-items: center;
transition: scale 300ms;
  :hover {
    color: white;
    background: #5736A3;
    scale: 1.02;
    }`

export const ButtonLoadMore = styled.button`
display: flex;
margin: 0 auto;
width: 160px;
height: 40px;
justify-content: center;
align-items: center;
background: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10.3108px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
color: #373737;
cursor: pointer;
transition: scale 300ms;
&.active {
    scale: 0.98;
  };
  :hover {
    color: white;
    background: #5736A3;
    scale: 1.02;
    }`