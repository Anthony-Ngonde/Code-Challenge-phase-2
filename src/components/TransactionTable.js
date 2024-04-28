import React from 'react'

const TransactionsTable = ({ transactions }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
      </table>
    );
  };
  
  export default TransactionsTable;