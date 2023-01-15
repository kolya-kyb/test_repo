import PropTypes from 'prop-types';
import { Table, TitleTable, DataTable, Container } from './TransactionHistory.styled';

const TransactionHistory = ({items}) => {
    return (
        <Container>
        <Table >
  <TitleTable>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </TitleTable>

  <DataTable>
    
    { items.map( item => ( <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>))
    }
    
   
   
  </DataTable>
</Table>
</Container>
    )
}

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
      PropTypes.exact({
      id: PropTypes.string.isRequired,
      type:PropTypes.string.isRequired,
      amount:PropTypes.string.isRequired,
      currency:PropTypes.string.isRequired,
  })),
  
  }