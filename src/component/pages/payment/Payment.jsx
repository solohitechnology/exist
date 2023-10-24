import React, { useState } from "react";
import axios from "axios";
import './payment.css';

const PaymentForm = () => {
  const [paymentInfo, setPaymentInfo] = useState({
    Balance: "",
    amount: "",
    account: "",
    currency: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:7000/payment", paymentInfo);
      console.log("Payment initiated:", response.data);
      // You can handle success or further actions here
    } catch (error) {
      console.error("Payment failed:", error);
      // Handle errors here
    }
  };

  return (
    <div className="payment-form-container">
      <h2 className="payment-form-title">Payment Form</h2>
      <form onSubmit={handleSubmit} className="payment-form">
        <div className="form-field">
          <label>Balance:</label>
          <input
            type="text"
            name="Balance"
            value={paymentInfo.Balance}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-field">
          <label>Amount:</label>
          <input
            type="text"
            name="amount"
            value={paymentInfo.amount}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-field">
          <label>Account:</label>
          <input
            type="text"
            name="account"
            value={paymentInfo.account}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-field">
          <label>Currency:</label>
          <input
            type="text"
            name="currency"
            value={paymentInfo.currency}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-field">
          <label>Reason:</label>
          <input
            type="text"
            name="reason"
            value={paymentInfo.reason}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-button">Make Payment</button>
      </form>
    </div>
  );
};

export default PaymentForm;
