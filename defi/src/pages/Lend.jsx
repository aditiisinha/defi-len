// src/pages/Lend.jsx
import React, { useState } from 'react';

const Lend = () => {
  const [amount, setAmount] = useState('');

  const handleLend = () => {
    console.log(`Lending ${amount} ETH`);
    // Integrate your lending logic here
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Lend Your Assets</h1>
      <input 
        type="number" 
        placeholder="Amount to Lend (ETH)" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
        className="w-full p-4 border border-gray-300 rounded-lg mb-4"
      />
      <button 
        onClick={handleLend} 
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Lend
      </button>
    </div>
  );
};

export default Lend;
