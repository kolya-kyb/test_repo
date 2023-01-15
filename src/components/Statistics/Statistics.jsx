import PropTypes from 'prop-types';
import { Container, StatList, StatListItem } from './Statistics.styled';

const Statistics = ({title, stats}) => {
return (
    <Container> 
{ title && ( 
<h2>{title}</h2>)}
  <StatList>
  {stats.map(stat => (
    <StatListItem key={stat.id}>
    <span>{stat.label}</span>
    <span>{stat.percentage}</span>
  </StatListItem>
        
      ))}
  </StatList>
</Container>
)
}



export default Statistics;

Statistics.propTypes = {
title: PropTypes.string,
stats: PropTypes.arrayOf(
    PropTypes.exact({
    id: PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    percentage:PropTypes.number.isRequired,
})),

}