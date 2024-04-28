import React, { useState } from 'react';
import './App.css';
import TransactionsTable from './components/TransactionsTable';
import AddTransactionForm from './components/AddTransactionForm'
import SearchBar from './components/SearchBar';

const App = () => {
 
  const initialTransactions = [
    {
      id: 1,
      date: '2019-12-01',
      description: 'Paycheck from Bob’s Burgers',
      category: 'Income',
      amount: 1000,
    },

    {
      id: 1,
      date: '2019-12-01',
      description: 'South by Southwest Quinoa Bowl at Fresh & Co',
      category: 'Income',
      amount: -10.55,
    }, {
      id: 1,
      date: '2019-12-01',
      description: 'South by Southwest Quinoa Bowl at Fresh & Co',
      category: 'Income',
      amount: -10.55,
    }, {
      id: 1,
      date: '2019-12-01',
      description: 'Sunglasses,Urban Outfitters',
      category: 'Income',
      amount: -24.99,
    }, {
      id: 1,
      date: '2019-12-01',
      description: 'Venno,Alice Pays you for Burrito',
      category: 'Income',
      amount: 8.75,
    }, {
      id: 1,
      date: '2019-12-01',
      description: 'Chipotle',
      category: 'Income',
      amount: -17.59,
    }
   
  ];

  const [transactions, setTransactions] = useState(initialTransactions);
  const [searchTerm, setSearchTerm] = useState('');

  
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>The Royal Bank of Flatiron</h1>
      <SearchBar handleSearch={(value) => setSearchTerm(value)} />
      <AddTransactionForm addTransaction={addTransaction} />
      <TransactionsTable transactions={filteredTransactions} />
    </div>
  );
};

export default App;




