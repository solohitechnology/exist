import React, { useEffect, useState } from 'react';
import './tellus.css';
import Nation from '../nation/Nation';
import Trust from '../trust/Trust';

const Tellus = () => {
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    // Define an asynchronous function to fetch the video URL from the server
    const fetchVideoUrl = async () => {
      try {
        const response = await fetch('/video-url'); // Replace with your server endpoint
        const data = await response.json();

        // Assuming the server response contains the video URL in a property named 'videoUrl'
        const serverVideoUrl = data.videoUrl;

        setVideoUrl(serverVideoUrl);
      } catch (error) {
        console.error('Error fetching video URL:', error);
        // Handle error
      }
    };

    // Call the asynchronous function when the component mounts
    fetchVideoUrl();
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

  return (
    <>
      <div className="tellus">
        <video autoPlay loop muted>
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className="tellus-form">
          <form action="">
            <h1>Tell us what you are looking for...</h1>
            <div className='fullname'>
              <legend>*Full Name</legend>
              <input type="text" />
            </div>
            <div className='two-div'>
              <div>
                <legend>*Phone Number</legend>
                <input type="text" />
              </div>
              <div>
                <legend>*Email Address</legend>
                <input type="text" />
              </div>
            </div>
            <div className='massage'>
              <legend>*Your Massage</legend>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <a href="mailto:contact@magikworld01.com" >Send your request</a>
          </form>
        </div>
      </div>
      <Nation />
      <Trust />
    </>
  );
}

export default Tellus;
