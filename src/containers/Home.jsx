import React from 'react';
import Banner from '../components/Banner';
import Products from '../components/Products';
import initialState from '../initialState';

function Home() {
  return (
    <div className="Home">
      <Banner/>
      <Products products={initialState.products}/>
    </div>
  )
}

export default Home