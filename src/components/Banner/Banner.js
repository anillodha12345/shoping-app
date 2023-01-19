import React from 'react';
// import image1 from '../../assets/images';
import image1 from '../../assets/images/image1.jpg';
// import './Banner.css';
import './Banner.scss';

function Banner() {
  return (
    <div>
      <div className='Container-fluid'>
        <div className='row'>
          <div className='col-md-12 p-0'>
            <img src={image1} className='images' alt='none_image' width='100%' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
