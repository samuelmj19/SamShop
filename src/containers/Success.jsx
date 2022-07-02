import React from 'react';
import '../styles/components/Success.css';

function Success() {
  return (
    <div className='Success'>
      <div className="Success-content">
        <h2>Samuel, thanks for your order</h2>
        <span>Your order will arrive in 3 days at your address:</span>
        <div className="Success-map">
          Google Maps
        </div>
      </div>
    </div>
  )
}

export default Success