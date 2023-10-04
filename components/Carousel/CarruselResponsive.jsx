'use client'
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carrusel.scss'

const CarruselResponsive = () => {
  return (

    

<div className="custom-carousel">
      <Carousel showThumbs={false} showStatus={false} autoPlay={true} interval={4500}>
        <div>
          <img style={{objectFit:"cover", width:"100%", height:"75vh"}} src="/Carrusel/1.jpg" alt="Image 1" />
        </div>
        <div>
        <img style={{objectFit:"cover", width:"100%", height:"75vh"}} src="/Carrusel/2.jpg" alt="Image 1" />
        </div>
        <div>
        <img style={{objectFit:"cover", width:"100%", height:"75vh"}} src="/Carrusel/3.jpg" alt="Image 1" />
        </div>
        <div>
        <img style={{objectFit:"cover", width:"100%", height:"75vh"}} src="/Carrusel/4.jpg" alt="Image 1" />
        </div>
        <div>
        <img style={{objectFit:"cover", width:"100%", height:"75vh"}} src="/Carrusel/5.jpg" alt="Image 1" />
        </div>
      </Carousel>
    </div>

 

  )
}

export default CarruselResponsive