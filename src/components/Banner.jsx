import React from 'react';
import '../styles/components/Banner.css';

const Banner = () => {
  return (
    <div className='Banner'>
        <img src="https://www.itsitio.com/wp-content/uploads/2018/10/QJv_7Mnw-1024x576.png" alt="banner image" className='banner-img' 
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-bottom"
        />
    </div>
  )
}

export default Banner