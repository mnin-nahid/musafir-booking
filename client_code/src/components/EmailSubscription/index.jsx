import React from 'react';
import './index.scss';

const index = () => {
  return (
    <div className='emailSubscription'>
        <span className="emailTitle">Save time, save money!</span>
        <span className='emailDescription'>Sign up and we'll send the best deals to you</span>
        <div className="emailInputContainer">
            <input type="text" placeholder='Enter email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
export default index;