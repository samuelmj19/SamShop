import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Checkout.css';


function Checkout() {
  const {state, removeFromCart} = useContext(AppContext)
  const {cart} = state;

  const handleRemove = product => () =>{
    removeFromCart(product)
  }
  const handleSumTotal = () =>{
    const reducer = (accumulator ,currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <div className='Checkout'>
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Order List:</h3> : <h3>No Orders...</h3>}
        {cart.map(item =>(
          <div className="Checkout-item" key={item.title}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>
                $
                {item.price}
              </span>
            </div>
            <button type='button' onClick={handleRemove(item)}>
              <i className="fas fa-solid fa-trash"></i>
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Total Price: $ ${handleSumTotal()}`}</h3>
          <Link to= '/checkout/information'>
            <button type='button'>Continue Order</button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Checkout