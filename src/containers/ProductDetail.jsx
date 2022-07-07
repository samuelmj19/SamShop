import React, { useContext } from 'react';
import '../styles/components/ProductDetail.css';
import AppContext from '../context/AppContext';
import Products from '../components/Products';
import SimilarProducts from '../components/SimilarProducts';


const ProductDetail = () => {
    const {productDetail, addToCart} = useContext(AppContext);
    const handleAddToCart = product => ()=>{
      addToCart(product)
    }
    document.documentElement.scrollTop = 0;
  return (
    <div className='Product-detail'>
        <div className="product-detail-container">
            <img src={productDetail.image} alt="" className='product-detail-image'/>
            <div className="product-detail-info-container">
                <h3 className='Product-detail-title'>{productDetail.title}</h3>
                <p className='Product-detail-price'>$ {productDetail.price}</p>
                <p className='Product-detail-description'>{productDetail.description}</p>
                <button type='button' onClick={handleAddToCart(productDetail)} className='Product-detail-button'>Buy</button>
            </div>
        </div>
        <div className="">
        <h3 className='Similar-products-title'>Similar Products</h3>
        <SimilarProducts productType={productDetail.type}/>
        </div>
    </div>
  )
}

export default ProductDetail