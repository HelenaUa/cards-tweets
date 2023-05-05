import { Card } from "components/Card/Card";
import { StyledTweetsUl } from "./CardsList.styled";


export const CardsList = ({users}) => {

    return (
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
    )
}