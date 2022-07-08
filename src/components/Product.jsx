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
      <div className='Products-item' onClick={()=>showProductDetail(product)}
        data-aos="fade-up"
        data-aos-offset="200"
        // data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-bottom"
      >
          <img src={product.image} alt={product.tittle} loading='lazy'/>
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
