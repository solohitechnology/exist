import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const PaystackPaymentForm = () => {
  const [amount, setAmount] = useState(1200);
  const [currency, setCurrency] = useState('NGN');
  const [exchangeRate] = useState(1200); // Fixed exchange rate

  const [paymentData, setPaymentData] = useState({
    email: '',
    name: '',
    address: '',
    postalCode: '',
    city: '',
    country: '',
  });

  const [validationErrors, setValidationErrors] = useState({
    email: '',
    name: '',
    address: '',
    postalCode: '',
    city: '',
    country: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const realAmount = new URLSearchParams(location.search).get('amount');
    setAmount(realAmount);
  }, [location.search]);

  const handleCurrencyChange = (e) => {
    const newCurrency = e.target.value;
    setCurrency(newCurrency);

    if (newCurrency === 'USD') {
      setAmount(amount / exchangeRate);
    } else {
      setAmount(amount * exchangeRate);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({ ...paymentData, [name]: value });
    setValidationErrors({ ...validationErrors, [name]: '' });
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!paymentData.email) {
      isValid = false;
      errors.email = 'Email is required';
    }

    if (!paymentData.name) {
      isValid = false;
      errors.name = 'Name is required';
    }

    if (!paymentData.address) {
      isValid = false;
      errors.address = 'Address is required';
    }

    if (!paymentData.postalCode) {
      isValid = false;
      errors.postalCode = 'Postalcode is required';
    }

    if (!paymentData.city) {
      isValid = false;
      errors.city = 'City is required';
    }

    if (!paymentData.country) {
      isValid = false;
      errors.country = 'Country is required';
    }

    setValidationErrors(errors);
    return isValid;
  };

  const handlePayment = async () => {
    try {
      if (!validateForm()) {
        return;
      }

      setIsLoading(true);

      let convertedAmount = amount;

      if (currency === 'USD') {
        convertedAmount = (amount * exchangeRate).toFixed(2);
      }

      const response = await axios.post('/payment', {
        ...paymentData,
        amount: convertedAmount * 100,
      });

      console.log(response.data);
      window.location.href = response.data;
    } catch (error) {
      console.error('Error handling payment:', error);

      alert('An error occurred while processing the payment. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="col-md-4 text-center mb-4 mb-md-0">
        <img src="/logo.jpeg" alt="Product Image" className="img-fluid rounded" />
      </div>

      <form>
        <div className="form-group">
          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            value={amount}
            className="form-control"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Currency:</label>
          <select
            name="currency"
            value={currency}
            onChange={handleCurrencyChange}
            className="form-control"
          >
            <option value="NGN">NGN (Naira)</option>
            <option value="USD">USD (US Dollar)</option>
          </select>
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={paymentData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
          {validationErrors.email && (
            <div className="text-danger">{validationErrors.email}</div>
          )}
        </div>

        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={paymentData.name}
            onChange={handleChange}
            className="form-control"
            required
          />
          {validationErrors.name && (
            <div className="text-danger">{validationErrors.name}</div>
          )}
        </div>

        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={paymentData.address}
            onChange={handleChange}
            className="form-control"
            required
          />
          {validationErrors.address && (
            <div className="text-danger">{validationErrors.address}</div>
          )}
        </div>

        <div className="form-group">
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={paymentData.city}
            onChange={handleChange}
            className="form-control"
            required
          />
          {validationErrors.city && (
            <div className="text-danger">{validationErrors.city}</div>
          )}
        </div>

        <div className="form-group">
          <label>Country:</label>
          <input
            type="text"
            name="country"
            value={paymentData.country}
            onChange={handleChange}
            className="form-control"
            required
          />
          {validationErrors.country && (
            <div className="text-danger">{validationErrors.country}</div>
          )}
        </div>

        {/* Add similar form groups for other fields with validation */}

        <button
          type="button"
          onClick={handlePayment}
          className="btn btn-primary"
          disabled={isLoading}
        >
          {isLoading ? 'Processing...' : 'Make Payment'}
        </button>
      </form>
    </div>
  );
};

export default PaystackPaymentForm;
