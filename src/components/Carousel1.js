import React from 'react'
import  Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// im creating a carousel function
function Carousel1() {
    const settings={
        dots:true,
        Infinity:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:2000,
        responsive:[
            {
            breakpoint : 1024,
            settings: { 
                slidesToShow:1,
                slidesToScroll:1,
                Infinity:true,
                dots:true
            }
        },
        {
            breakpoint:600,
            settings:{
                slidesToShow:1,
                slidesToScroll:1
            }

        }
        ]
    };
  return (
    <div className='carousel-container '>
        <h1 className='heading'>whitebox learning</h1>
        <Slider {...settings}>
            <div>
                <img className='image' alt='cat' src="https://picsum.photos/seed/picsum/400/600"/>
            </div>
            <div>
                <img className='image' alt='dog' src='https://picsum.photos/id/870/200/300?grayscale&blur=2'/>
            </div>
            <div>
                <img className='image' alt='rabbit' src='https://picsum.photos/id/237/200/300'/>
            </div>
            <div>
                <img className='image' alt='cow' src='https://picsum.photos/seed/picsum/200/300'/>
            </div>
            <div>
                <img className='image' alt='pig' src='https://picsum.photos/id/870/200/300?grayscale&blur=2'/>
            </div>
        </Slider>
    </div>
  )
}

export default Carousel1