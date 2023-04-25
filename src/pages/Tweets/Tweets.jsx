import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "components/Card/Card";
import { ButtonBack, StyledTweetsUl, ButtonLoadMore } from "./Tweets.styled";
import { useLocation } from 'react-router-dom';


const Tweets = () => {

  const [users, setUsers] = useState([]);
  const [limit, setLimit] = useState(3);
  const [buttonVisible, setbuttonVisible] = useState(false);

  const location = useLocation();
  const goBackLink = location?.state?.from ?? "/";
  
  async function fetchTweets() {
    try {
      const response = await axios.get(`https://642fd9e6b289b1dec4bb7aed.mockapi.io/users?page=1&limit=${limit}`);
      setUsers(response.data);
      setbuttonVisible(true);
      if (limit === 15) {
        setbuttonVisible(false);
      }
    } catch (error) {
    console.log(error);
    }
  };

  const LoadMore = () => {
    setLimit(limit + 3);
  };
  
  useEffect(() => {
    fetchTweets(limit);
     // eslint-disable-next-line
  }, [limit]);

    return (
      <div>
        <ButtonBack to={goBackLink}>Back</ButtonBack> 
        <StyledTweetsUl>
          {users.map(user =>
                (<Card key={user.id}
                        id={user.id}
                        name={user.user}
                        avatar={user.avatar}
                        tweets={user.tweets}
                        followers={user.followers}
                        isFollowing={user.isFollowing}>
                </Card>)
          )}
        </StyledTweetsUl>
        {buttonVisible && <ButtonLoadMore type="button" onClick={LoadMore}>Load More</ButtonLoadMore>}
      </div>
  )
};

export default Tweets;