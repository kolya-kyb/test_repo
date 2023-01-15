import PropTypes from 'prop-types';
import { Container, Friend, Friends, Status, Name } from './FriendList.styled';

const FriendList = ({friedns}) => {
    return (
        <Container>
        <Friends>
            {
                friedns.map( friend => (
                   <Friend key={friend.id}> 
                    <Status stat= {friend.isOnline}></Status>
                    <img
                    src={friend.avatar}
                    alt="User avatar"
                    />
                  <Name >{friend.name}</Name>
                 
                  </Friend>
                ))
            }
  
</Friends>
</Container>
    )
}
 
export default FriendList;

FriendList.propTypes = {
    friedns: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired, 
            name:PropTypes.string.isRequired,
            isOnline:PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired
        }

        )
    )
}