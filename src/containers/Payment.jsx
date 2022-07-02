import React from 'react';
import '../styles/components/Payment.css'

function Payment() {
  return (
    <div className='Payment'>
      <div className="Payment-content">
        <h3>Summary of your order</h3>
        <div className="Payment-button">
          Payment with Paypal
        </div>
      </div>
      <div />
    </div>
  )
}

export default Payment