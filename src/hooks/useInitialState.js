import { useState } from "react";
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const [productDetail, setProductDetail] = useState([]);

  const addToCart = payload =>{
    setState({
        ...state,
        cart: [...state.cart, payload]
    });
  };
  const removeFromCart = payload =>{
    setState({
        ...state,
        cart: state.cart.filter(items => items.id !== payload.id )
    });
  };
  const addToBuyer = payload =>{
    setState({
      ...state,
      buyer : [...state.buyer, payload]
    })
  };
  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    state,
    productDetail, 
    setProductDetail
  };
}


export default useInitialState