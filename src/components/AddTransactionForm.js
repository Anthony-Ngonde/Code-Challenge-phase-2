
import React, { useState } from 'react';

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
    // Clear form fields
    setFormData({
      date: '',
      description: '',
      category: '',
      amount: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields for date, description, category, and amount */}
      {/* Submit button */}
    </form>
  );
};

export default AddTransactionForm;

