import { SlyledCardLi, StyledText, StyledButton, StyledImg, Logo, Picture, Line } from './Card.styled';
import { useState } from 'react';
import PropTypes from 'prop-types';
import logo from '../../image/Logo.png';
import picture from '../../image/picture.png';
import axios from 'axios';


export const Card = ({ id, name, avatar, tweets, followers, isFollowing }) => {
    
  const [follower, setFollower] = useState(followers);
  const [buttonFollowing, setButtonFollowing] = useState(isFollowing);

  const handleButtonClick = async () => {
    const followerCount = buttonFollowing ? follower - 1 : follower + 1;
    const updateFollowing = !isFollowing ? true : false;
    try {
      await axios.put(`https://642fd9e6b289b1dec4bb7aed.mockapi.io/users/${id}`,
        { followers: followerCount, isFollowing: updateFollowing });
      setFollower(followerCount);
      setButtonFollowing(!buttonFollowing);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <SlyledCardLi key={id} id={id}>

      <Logo src={logo} alt='logo'/>
      <Picture src={picture} alt='picture'/>
      <Line></Line>

      <StyledImg src={avatar} width={80} alt={name}/>
      
      <StyledText>{tweets} tweets</StyledText>
      <StyledText>{follower.toLocaleString('en-US', { maximumFractionDigits: 0 })} followers</StyledText>
      
      <StyledButton style={{ background: buttonFollowing ? '#5CD3A8' : '#EBD8FF' }} type="button" onClick={handleButtonClick} >
           {buttonFollowing ? 'Following' : 'Follow'}
      </StyledButton>
         
  </SlyledCardLi>
)
};

Card.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  avatar: PropTypes.string,
  tweets: PropTypes.number,
  followers: PropTypes.number,
  isFollowing: PropTypes.bool
};