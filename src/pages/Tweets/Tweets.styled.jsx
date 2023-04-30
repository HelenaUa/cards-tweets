import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonBack = styled(NavLink)`
display: flex;
text-decoration: none;
border: solid 1px black;
border-radius: 4px;
color: #373737;
background: #EBD8FF;
font-weight: 500;
width: 76px;
height: 34px;
justify-content: center;
align-items: center;
  :hover {
    color: white;
    background: #5736A3;
    }`

export const StyledTweetsUl = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 20px;
padding: 0 16px;`    

export const ButtonLoadMore = styled.button`
display: flex;
margin: 0 auto;
width: 196px;
height: 50px;
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
&.active {
   background: #5CD3A8;
   box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
   border-radius: 10.3108px;
  };
  :hover {
        background: #5CD3A8;
    }`