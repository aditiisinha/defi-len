// src/pages/Borrow.jsx
import React, { useState } from 'react';

const Borrow = () => {
  const [amount, setAmount] = useState('');

  const handleBorrow = () => {
    console.log(`Borrowing ${amount} ETH`);
    // Integrate your borrowing logic here
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Borrow Assets</h1>
      <input 
        type="number" 
        placeholder="Amount to Borrow (ETH)" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
        className="w-full p-4 border border-gray-300 rounded-lg mb-4"
      />
      <button 
        onClick={handleBorrow} 
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Borrow
      </button>
    </div>
  );
};

export default Borrow;
