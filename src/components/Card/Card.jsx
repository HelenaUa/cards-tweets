import { SlyledCardLi, StyledCardUl, StyledText, StyledButton, StyledImg, Logo, Picture, Line } from './Card.styled';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
//import { useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';
import logo from '../../image/Logo.png';
import picture from '../../image/picture.png';

export const Card = ({ users }) => {
  
  // const [userId, setUserId] = useState(null);
    
  const number = 100500;
  const formattedNumber = number.toLocaleString('en-US');
  const one = 1;
  const formattedOne = one.toLocaleString('en-US');

  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(formattedNumber);
  
  // const following = (id, e) => {
  //   const userIdx = tweets.findIndex(user => user.id === id);

  //   if (userId === id) {
  //     setUserId(null);
  //     tweets[userIdx].followers--;
  //     return;
  //   }

  //   setUserId(id);
  //   tweets[userIdx].followers++;
  // };



  useEffect(() => {
    // Збереження стану кнопки та кількості фоловерів в локальному сховищі браузера при оновленні сторінки
    localStorage.setItem('isFollowing', JSON.stringify(isFollowing));
    localStorage.setItem('followerCount', JSON.stringify(followerCount));
  }, [isFollowing, followerCount]);

  const handleButtonClick = () => {
    if (!isFollowing) {
      // Збільшення кількості фоловерів на 1, якщо кнопка переходить зі стану Follow в Following
      setFollowerCount(prevCount => prevCount + formattedOne);
    } else {
      // Зменшення кількості фоловерів на 1, якщо кнопка переходить зі стану Following в Follow
      setFollowerCount(prevCount => prevCount - formattedOne);
    }
    setIsFollowing(!isFollowing); // Зміна значення стану при клікові на кнопку
  }

  useEffect(() => {
    // Відновлення стану кнопки та кількості фоловерів з локального сховища браузера при завантаженні сторінки
    const storedIsFollowing = localStorage.getItem('isFollowing');
    const storedFollowerCount = localStorage.getItem('followerCount');
    if (storedIsFollowing) {
      setIsFollowing(JSON.parse(storedIsFollowing));
    }
    if (storedFollowerCount) {
      setFollowerCount(JSON.parse(storedFollowerCount));
    }
  }, []);


    
  return (
    <StyledCardUl>
      {users.map(user => (
        <SlyledCardLi key={nanoid()}>

          <Logo src={logo} alt='logo'/>
          <Picture src={picture} alt='picture'/>
          <Line></Line>
              
          {/* <StyledText>{tweet.user}</StyledText> */}
          <StyledImg
              src={user.avatar}
              width={80}
              alt='avatar'
          />
          <StyledText>{user.tweets} tweets</StyledText>
          <StyledText>{followerCount} followers</StyledText>
          <StyledButton style={{ background: isFollowing ? '#5CD3A8' : '#EBD8FF' }}
            type='button' 
            onClick={handleButtonClick}>
               {isFollowing ? 'Following' : 'Follow'}
          </StyledButton>
        </SlyledCardLi>
      ))}
    </StyledCardUl>
  );
};

// Card.propTypes = {
//   tweets: PropTypes.array,
// };