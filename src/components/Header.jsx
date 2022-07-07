import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';
import AppContext from '../context/AppContext';
import Search from './Search';

function Header() {
  const {state} = useContext(AppContext);
  const {cart} = state;

  return (
    <div className='Header'>
      <h1 className='Header-title'>
        <Link to='/'>
          Sam Shop
        </Link>        
      </h1>
      {/* <Search/> */}
      <div className="Header-checkout">
        <Link to='/checkout'>
        <i className="fa-solid fa-cart-shopping"></i>
        </Link>
        {cart.length > 0 && <div className='Header-alert'>{cart.length}</div>}
      </div>
    </div>
  )
}

export default Header