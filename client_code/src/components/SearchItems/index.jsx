import React from 'react';
import "./index.scss";

const Index = () => {
  return (
    <div className='searchItem'>
      <img src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className='searchItemsImg'
      />
      <div className="searchItemDesc">
        <h1 className="searchItemTitle">Priyo Stylish Residential</h1>
        <span className="searchItemDistance">450m form center</span>
        <span className="searchItemTaxiOption">Free airport taxi</span>
        <span className="searchItemSubTitle">
          Studio Residential Hotel with air condition
        </span>
        <span className="searchItemFeatures">
        1 large double bed
        </span>
        <span className="searchItemCancelOption">
          Free Cancellation
        </span>
        <span className="searchItemCancelOptionSubTitle">
          You can cancel leater, so look in the great place today!
        </span>
      </div>
      <div className="searchItemDetails">

      </div>
      <div className="searchItemDetails">
        <div className="searchItemRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="searchItemDetailTexts">
          <span className="SearchItemPrice">$445</span>
          <span className="SearchItemTaxOption">Includes taxes and fees.</span>
          <button className="SearchItemCheckButton">See availability</button>
        </div>

      </div>
    </div>
  )
}

export default Index;