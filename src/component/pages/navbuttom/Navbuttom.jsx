import { useRef, useEffect } from "react";
import './navbuttom.css';
import Items from "../items/Items";
import Tellus from "../tellus/Tell-us";
import Faq from "../faq/Faq";


const images = [
  "marry.jpg",
  "m1.jpg",
  "m2.jpg",
  "m3.jpg",
  "m4.jpg",
  "m5.jpg",
  "m6.jpg",
  "m7.jpg",
  "m8.jpg",
  "m9.jpg",
  "m10.jpg",
  "m11.jpg",
  "m12.jpg",
];

const Navbuttom = () => {

    const pointer1 = `>`
    const pointer2 =`>`

  const sliderRef = useRef(null);
  let currentIndex = 0;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const nextSlide = () => {
    if (sliderRef.current) {
      if (currentIndex < images.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      sliderRef.current.style.backgroundImage = `url(${images[currentIndex]})`;
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-scroll every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="slide-container">
        <div className="slide-right">
        <p>
            Express your feelings with meaningfull gifts.
        </p>
        <div className="button-gift">
            <a href="/"> Gift Cataloge</a> <span className="first-pointer"><img src="/pointer.png" alt="" /></span> 
        </div>
        </div>
      <div
        ref={sliderRef}
        className="faceImg"
        style={{
          // width: "100%",
           // Adjust the height as needed
          backgroundImage: `url(${images[currentIndex]})`,
          // backgroundSize: "cover",
          // transition: "background-image 0.5s",
        }}
      ></div>
    </div>
    <Items />
    <Tellus />
    <Faq />
    </>
  );
};

export default Navbuttom;
