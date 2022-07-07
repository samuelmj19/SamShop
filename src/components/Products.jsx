import React, {useContext} from 'react';
import Product from './Product';
import '../styles/components/Products.css';
import AppContext from '../context/AppContext';



function Products() {
  const {state, addToCart} = useContext(AppContext);
  const {products} = state;

  const handleAddToCart = product => ()=>{
    addToCart(product)
  }
  return (
    <div className='Products'
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-bottom"
    >
      <h3 className='Products-title'>Products</h3>
        <div className="Products-items">
            {products.map( product=>(
                <Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>
            ))}
        </div>
    </div>
  )
}

export default Products