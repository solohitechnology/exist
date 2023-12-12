import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
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
      const response = await axios.post('http://localhost:9000/api/login', formData);

      // Assuming your server responds with the tokens and user data
      const { accessToken, refreshToken, user } = response.data;

      // Store tokens and user data as needed (e.g., in local storage, state management)
      // For simplicity, storing in localStorage here
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      // You may want to store user data as well

      console.log('Login successful:', response.data);
      // You can perform additional actions upon successful login
    } catch (error) {
      if (error.response) {
        console.error('Login failed:', error.response.data);
        // Handle error cases
      } else {
        console.error('Error during login:', error.message);
      }
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
      </label>

      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
      </label>

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
