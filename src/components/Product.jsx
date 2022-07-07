import React, { useContext } from 'react';
import ProductDetail from '../containers/ProductDetail';
import {Link} from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Products.css'


function Product({ product, handleAddToCart }) {
  const {setProductDetail} = useContext(AppContext)
  const showProductDetail = (productP) =>{
    setProductDetail(productP)
  }
  return (
    <Link to='/product-detail'>
      <div className='Products-item' onClick={()=>showProductDetail(product)}>
          <img src={product.image} alt={product.tittle}/>
          <div className="Products-item-info">
              <h2>
                  {product.title}
                  <span>
                      {' '}
                      $
                      {' '}
                      {product.price}
                  </span>
              </h2>
              <p>{product.description}</p>
          </div>
          {/* <button type='button' onClick={handleAddToCart(product)}>Buy</button> */}
      </div>
    </Link>
  );
}

export default Product
