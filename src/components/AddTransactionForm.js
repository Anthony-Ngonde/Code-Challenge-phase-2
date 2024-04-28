import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AddTransactionForm = ({ addTransaction }) => {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction(formData);
    
    setFormData({
      date: '',
      description: '',
      category: '',
      amount: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: '0 auto' }}>
      <div style={{ marginBottom: '10px' }}>
        <label>Date:</label>
        <br />
        <DatePicker
          selected={formData.date}
          onChange={(date) => setFormData({ ...formData, date })}
          dateFormat="yyyy-MM-dd"
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Description:</label>
        <br />
        <input
          type="text"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Category:</label>
        <br />
        <input
          type="text"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Amount:</label>
        <br />
        <input
          type="number"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
        />
      </div>
      <button type="submit" style={{ backgroundColor: 'dodgerblue', color: '#fff', border: 'none', padding: '10px', borderRadius: '4px', cursor: 'pointer' }}>Add Transaction</button>
    </form>
  );
};

export default AddTransactionForm;

