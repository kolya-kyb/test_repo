import PropTypes from 'prop-types';
import { Profil, ProfileDeckription,
Name, Tag, Location, Statistic, StatisticItem, StatsInfo } from './Profile.styled';

const Profile =   ( {username, tag, location, avatar, stats}) => { 
    return ( 
<ProfileDeckription >
<Profil>
  <img
    src={avatar}
    alt="User avatar"
  />
  <Name>{username}</Name>
  <Tag>@{tag}</Tag>
  <Location>{location}</Location>
</Profil>

<Statistic>
  <StatisticItem>
    < StatsInfo  >Followers</ StatsInfo >
    < StatsInfo  >{stats.followers}</ StatsInfo >
  </StatisticItem>
  <StatisticItem>
    < StatsInfo  >Views</ StatsInfo >
    < StatsInfo  >{stats.views}</ StatsInfo >
  </StatisticItem>
  <StatisticItem>
    < StatsInfo  >Likes</ StatsInfo >
    < StatsInfo  >{stats.likes}</ StatsInfo >
  </StatisticItem>
</Statistic>
</ProfileDeckription>)


}

export default Profile

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.exact( {
    followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,})
};