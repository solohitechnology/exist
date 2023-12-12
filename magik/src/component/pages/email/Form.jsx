import React, { useState } from 'react';
import './form.css'
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    username: '',
    city: '',
    address: '',
    state: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:9000/api/register', formData);

      console.log('Registration successful:', response.data);
      // You can perform additional actions upon successful registration
    } catch (error) {
      if (error.response) {
        console.error('Registration failed:', error.response.data);
        // Handle error cases
      } else {
        console.error('Error during registration:', error.message);
      }
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </label>

      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
      </label>

      <label>
        Phone:
        <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} />
      </label>

      <label>
        Username:
        <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
      </label>

      <label>
        City:
        <input type="text" name="city" value={formData.city} onChange={handleInputChange} />
      </label>

      <label>
        Address:
        <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
      </label>

      <label>
        State:
        <input type="text" name="state" value={formData.state} onChange={handleInputChange} />
      </label>

      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
      </label>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
