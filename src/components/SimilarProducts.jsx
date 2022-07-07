import React, {useContext} from 'react';
import Product from './Product';
import '../styles/components/Products.css';
import AppContext from '../context/AppContext';


function SimilarProducts({productType}) {
  const {state, addToCart} = useContext(AppContext);
  const {products} = state;

  const handleAddToCart = product => ()=>{
    addToCart(product)
  }
  const filteredProducts = products.filter(item => item.type.includes(productType)).slice(1,5)
  return (
    <div className='Products'>
        <div className="Products-items">
            {filteredProducts.map( product=>(
                <Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>
            ))}
        </div>
    </div>
  )
}

export default SimilarProducts