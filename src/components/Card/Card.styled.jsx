import styled from "styled-components";
import picture from "../../image/picture.png";

export const SlyledCardLi = styled.li`
position: relative;
display: flex;
flex-direction: column;
list-style-type: none;
width: 380px;
height: 460px;
padding: 0 0 36px 0;
justify-content: flex-end;
align-items: center;
background-color: #5736A3;
border-radius: 20px;
  &:hover {
    background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  }`

export const StyledText = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
text-transform: uppercase;
margin-left: 0;
margin-top: 0;
margin-right: 0;
margin-button: 8px;
color: #EBD8FF;`  

export const StyledButton = styled.button`
text-transform: uppercase;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 14px 28px;
gap: 6px;
width: 196px;
height: 50px;
margin-top: 18px;
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
  &:hover,
  :focus {
    scale: 1.04;
  };
   &:active {
    scale: 0.96;
  }`

export const Logo = styled.img`
position: absolute;
top: 20px;
left: 20px;`

export const Picture = styled.div`
margin-bottom: 88px;
width: 308px;
height: 168px;
background-image: url('${picture}');
background-size: cover;`

export const Line = styled.div`
position: absolute;
width: 80px;
height: 80px;
top: 195px;
left: 150px;

&::before {
    content: '';
    position: absolute;
    width: 380px;
    height: 8px;
    top: 40px;
    left: -150px;
    background-color: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }`

export const StyledImg = styled.img`
position: absolute;
top: -3px;
border-radius: 50%;
border: 8px solid #EBD8FF;
box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;`  