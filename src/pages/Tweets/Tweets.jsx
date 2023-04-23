import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "components/Card/Card";
// import { ListStyled } from "./Tweets.styled";
import { ButtonLoadMore } from "./Tweets.styled";
import { NavLink, useLocation } from 'react-router-dom';


const Tweets = () => {

  const [users, setUsers] = useState([]);
  const location = useLocation();
  const goBackLink = location?.state?.from ?? "/";
  // const [currentPage, setCurrentPage] = useState(1);
  // const [limit, setLimit] = useState(3);
  const [page, setPage] = useState(1);
  // const [buttonVisible, setbuttonVisible] = useState(false);

  async function fetchTweets(page) {
    console.log(page);
    try {
      const response = await axios.get(`https://642fd9e6b289b1dec4bb7aed.mockapi.io/users?page=${page}&limit=3`);
      const newTweets = response.data;
        setUsers(prevTweets => [...prevTweets, ...newTweets]); 
    } catch (error) {
    console.log(error);
    }
  };
  
  const LoadMore = () => {
        setPage(prevPage => prevPage + 1);
    }
  // const LoadMore = () => {
  //   setCurrentPage((prevPage) => prevPage + 1); 
  // };  
      

  useEffect(() => {
    fetchTweets(page);
     // eslint-disable-next-line
  }, [page]);

    return (
        <div>
            <NavLink to={goBackLink}>Back</NavLink>
        {/* <ListStyled> */}
          <Card users={users}/>
            {/* </ListStyled>    */}
            <ButtonLoadMore type="button" onClick={LoadMore}>Load More</ButtonLoadMore>
      </div>
  
  )
};

export default Tweets;