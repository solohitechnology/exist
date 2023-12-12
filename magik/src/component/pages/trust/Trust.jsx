import React, { useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./trust.css";
import Slider from "react-slick";
import { Helmet } from "react-helmet";

const Trust = () => {
  const testimonials = [

    {
      img: "/m8.jpg",
      name: "Alice Johnson",
      location: "Lagos, Nigeria",
      comment:
        "I had an amazing experience with your service. You made my birthday so special with the thoughtful gifts and surprises. It was a day to remember!",
    },
    {
      img: "m5.jpg",
      name: "John, Abena ",
      location: "Kumasi, Ghana",
      comment:
        "Our wedding day was made even more magical thanks to your team. The attention to detail and the surprise packages were beyond our expectations. Thank you!",
    },
    {
      img: "m1.jpg",
      name: "Ella Davis",
      location: "Abuja, Nigeria",
      comment:
        "I've never seen someone so delighted by a surprise gift. Your service brought immense joy to my friend's birthday. It's truly heartwarming."
    },
    {
      img: "/m8.jpg",
      name: "Zainab, Mustapha",
      location: "Kano, Nigeia",
      comment:
        "I had an amazing experience with your service. You made my birthday so special with the thoughtful gifts and surprises. It was a day to remember!",
    },
    {
      img: "m5.jpg",
      name: "Sophia Uzo",
      location: "Lagos, Nigeria",
      comment:
        "Our wedding day was made even more magical thanks to your team. The attention to detail and the surprise packages were beyond our expectations. Thank you!",
    },
    {
      img: "solo.jpg",
      name: "Solomon John",
      location: "Newcastle, UK",
      comment:
        "I've never seen someone so delighted by a surprise gift. Your service brought immense joy to my friend's birthday. It's truly heartwarming."
    }


  ];

  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Adjust the speed
    slidesToShow: 2, // Show 3 slides at a time
    slidesToScroll: 1,
  };


  if (window.innerWidth > 1024) {
    settings.slidesToShow = 3;
  } else {
    settings.slidesToShow = 2;
  }


  if (window.innerWidth < 768) {
    settings.slidesToShow = 1;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext(); // Move to the next slide
      }
    }, 5000); // Change the interval duration (in milliseconds) to control the slide change frequency

    return () => {
      clearInterval(interval); // Clear the interval on component unmount
    };
  }, []);

  return (
    <>
      {/* <Helmet>
        <title>Why Trust Magikworld01? - Our Commitment to Quality and Customer Satisfaction</title>
      </Helmet> */}


      <div className="trust-page">
        <div className="trust-para">
          <h1>Trusted by Thousands of Happy Customers</h1>
          <p>
            Bring a small dose of happiness to others' lives by sharing kindness,
            joy, and positivity, making each day a bit brighter and the world a
            happier place for all
          </p>
        </div>

        <div className="trust-container">
          <Slider {...settings} className="card-container" ref={sliderRef}>
            {testimonials.map((tesmo, index) => (
              <div key={index} className="trust-cards">
                <div className="testimo">
                  <div className="user-profile">
                    <img src={tesmo.img} alt="" />
                    <div className="user-details">
                      <span className="user-name">{tesmo.name}</span>
                      <span className="location"> {tesmo.location} </span>
                    </div>
                  </div>
                  <p className="sb">{tesmo.comment}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Trust;















