import React from 'react'
import FancyCarousel from "react-fancy-circular-carousel";
import 'react-fancy-circular-carousel/FancyCarousel.css';
import us1 from '../../assets/user-1.png'
import us2 from '../../assets/user-2.png'
import us3 from '../../assets/user-3.png'
import us4 from '../../assets/user-4.png'
import './Review.css'

const Review = () => {
    const images=[us1,us2,us3,us4];
    return (
        <section className='review'>
            <div className="title">
                <h1>Review</h1>
            </div>
        <div className="carousel">
     < FancyCarousel
            images={images} 
            carouselRadius={150}
            peripheralImageRadius={50}
            centralImageRadius={50}
            focusElementStyling={{border: '1px solid #ba4949'}}
            autoRotateTime={3}
            borderWidth={2}
            borderHexColor={'1c364f'}
    />
  </div> 
        </section>

  )
}

export default Review