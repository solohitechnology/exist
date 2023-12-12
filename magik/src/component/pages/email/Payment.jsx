// PaymentFormWithElements.js
import React from 'react';
import { Elements } from 'react-stripe-elements';
import PaymentForm from './EmailForn'; // Adjust the import path based on your file structure

const Payment = () => {
  return (
    <Elements>
      <PaymentForm />
    </Elements>
  );
};

export default Payment;
