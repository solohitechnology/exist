import React, { useState } from 'react';
import './email.css'; // Import the CSS file
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const EmailForm = () => {
  const location = useLocation();
  const [email, setEmail] = useState('');
  const amountFromParams = new URLSearchParams(location.search).get('amount');
  const exchangeRate = 100; // Replace with the actual exchange rate
  const amountInNGN = amountFromParams * exchangeRate;
  const [amount, setAmount] = useState(amountInNGN || '');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email,
      amount: amountInNGN,
    };

    try {
      const response = await axios.post(
        '/payment',
        data,
        { headers: { 'Content-Type': 'application/json' } }
      );
      
      console.log(response);
      window.location.href = response.data.paystackResponse;
    } catch (error) {
      console.error(error);
      // Handle the error appropriately
    }

    console.log(`Email submitted: ${email}`);
  };

  return (
    <div className="email-form-container">
      <h2>
        Amount: ₦{amountInNGN}
      </h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
          placeholder="Enter your email address"
        />

        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default EmailForm;
