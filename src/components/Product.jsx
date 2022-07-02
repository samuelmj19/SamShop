import React from 'react';


function Product({ product, handleAddToCart }) {
  return (
    <div className='Products-item'>
        <img src={product.image} alt={product.tittle}/>
        <div className="Product-item-info">
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
        <button type='button' onClick={handleAddToCart(product)}>Buy</button>
    </div>
  );
}

export default Product
