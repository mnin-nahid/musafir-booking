import React, { useState } from 'react';
import './index.scss';
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import EmailSubscription from '../../components/EmailSubscription';
import Footer from "../../components/Footer"

export default function Index() {

  const [slideIndex, setSlideIndex] = useState(0);
  const [openSlider, setOpenSlider] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleOpenSlider = (index) => {
    setSlideIndex(index);
    setOpenSlider(true);
  }

  const handleMove = (direction) => {
    let newSlideIndex;

    if (direction === "l") {
      newSlideIndex = slideIndex === 0 ? 5 : slideIndex - 1;
    } else {
      newSlideIndex = slideIndex === 5 ? 0 : slideIndex + 1;
    }

    setSlideIndex(newSlideIndex)
  };
  return (
    <div>
      < Navbar />
      < Header type='hotels' />

      {openSlider && <div className="slider">

        <FontAwesomeIcon
          icon={faCircleXmark}
          className="close"
          onClick={() => setOpenSlider(false)}
        />
        <FontAwesomeIcon
          icon={faCircleArrowLeft}
          className="arrow"
          onClick={() => handleMove("l")}
        />
        <div className="sliderWrapper">
          <img src={photos[slideIndex].src} alt="" className="sliderImg" />
        </div>
        <FontAwesomeIcon
          icon={faCircleArrowRight}
          className="arrow"
          onClick={() => handleMove("r")}
        />
      </div>}

      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className='bookNow'>Reserve or Book Now</button>

          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Mirpur 1216, Dhaka</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 450m from IDB Vobon.
          </span>
          <span className='hotelPriceHighLight'>
            Book a stay over $232 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {
              photos.map((photo, index) => (
                <div className="hotelImagesWrapper">
                  <img src={photo.src} className="hotelImg" alt="" onClick={() => handleOpenSlider(index)} />
                </div>
              ))
            }
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Facilities of Hotel Priyo Stylish Residential</h1>
              <p className="hotelDesc">
                Set in Dhaka, within 600 m of Dhaka Tribune and 600 m of State University of Bangladesh, Hotel Priyo Nibash Stylish Residential offers accommodation with a terrace and as well as free private parking for guests who drive. Among the facilities of this property are a restaurant, a 24-hour front desk and room service, along with free WiFi throughout the property. The hotel features family rooms.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for an 8-night stay!</h1>
              <span>
                Top location: Highly rated by recent guests (10.0)
              </span>
              <h2>
                <strong>$999</strong> 8-night
              </h2>
              <button>Reserve or Book Now</button>
            </div>
          </div>
        </div>
      </div>
      < EmailSubscription />
      < Footer />
    </div>
  )
}
