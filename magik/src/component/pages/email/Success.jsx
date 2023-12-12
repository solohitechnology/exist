// SuccessPage.jsx

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../items/CartSlice'; 

import './success.css'; // Import your CSS file
import axios from 'axios';

const Success = () => {
  const [lastPayment, setLastPayment] = useState(null);
  const dispatch = useDispatch();

  console.log(lastPayment);

  useEffect(() => {
    const fetchLastPayment = async () => {
      try {
        const response = await axios.get('/last-payment'); // Replace with your actual server endpoint
        setLastPayment(response.data);

        // Clear the cart after a successful payment
        dispatch(clearCart());
      } catch (error) {
        console.error('Error fetching last payment:', error);
      }
    };

    fetchLastPayment();
  }, [dispatch]); // Include dispatch in the dependency array

  return (
    <div className="success-container">
      <h1>Payment Successful!</h1>
      <p>Your payment was successful. Thank you for your purchase!</p>
      <img src="/success.png" alt="Success" className="success-image" />
      <a href="/" className="back-to-home-link">
        Back to Home
      </a>
    </div>
  );
};

export default Success;
