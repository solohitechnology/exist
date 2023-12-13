import React, { useState } from 'react';
import axios from 'axios';
import './postitems.css'; // Import the CSS file

const PostItems = () => {
  const [formData, setFormData] = useState({
    id: 0,
    image: '',
    price: 0,
    for: '',
    type: '',
  });
  const [massage, setMassage] = useState('');
  const [loading, setLoading] = useState(false); // New loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true); // Set loading to true while uploading

      // Create a FormData object
      const formData = new FormData();
      formData.append('id', 0);
      formData.append('image', e.target.image.files[0]); // Assuming the input has the name "image"
      formData.append('price', e.target.price.value);
      formData.append('for', e.target.for.value);
      formData.append('type', e.target.type.value);

      // Make a POST request to your server's endpoint with FormData
      const response = await axios.post('/api/items', formData);

      // Handle the response as needed
      console.log('Item added successfully:', response.data);
      setMassage('Item added successfully');

      // Reset the form
      e.target.reset();
    } catch (error) {
      // Handle errors
      console.error('Error adding item:', error.message);
    } finally {
      setLoading(false); // Set loading back to false
    }
  };

  return (
    <div className="post-items-container">
      <h2>Add Item</h2>
      <form onSubmit={handleSubmit}>
        <h3 style={{ color: 'green' }}>{massage}</h3>
        <br />
        <label>
          Image URL:
          <input type="file" name="image" onChange={handleChange} />
        </label>
        <br />
        <label>
          Price:
          <input type="number" name="price" value={formData.price} onChange={handleChange} />
        </label>
        <br />
        <label>
          Name:
          <input type="text" name="for" value={formData.for} onChange={handleChange} />
        </label>
        <br />
        <label>
          Type:
          <select name="type" value={formData.type} onChange={handleChange} required>
            <option value="">Select an option</option>
            <option value="popular">Popular</option>
            <option value="Event">Event</option>
            <option value="Anniversary">Anniversary</option>
            <option value="specialgift">SpecialGift</option>
          
          </select>
        </label>
        <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Uploading...' : 'Add Item'}
        </button>
      </form>
    </div>
  );
};

export default PostItems;
