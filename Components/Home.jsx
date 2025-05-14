import React, { useState } from 'react'
import 'animate.css';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


import { FreeMode, Pagination } from 'swiper/modules';


export default function Home() {


  return (

    <>
      <div className='col-12 d-flex flex-wrap  ' id='discover'>
        <div className='left-side col-6 '>
          <div className='paragraph'>
            <p id='title'>Discover Your Dream Property with Estatein</p>

            <p id='little-title'>Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
          </div>
          <div className='more d-flex justify-content-center gap-2'>
            {/* <button className='btn' id='learn-more'>Learn more</button> */}
            <Link to={"/Properties"}>
              <button className='btn' id='browse'>Browse Properties</button>
            </Link>
          </div>
          <div className=' customers justify-content-center col-12'>
            <div className='happy col-4'>
              <p>200+</p>
              <p>Happy Customers</p>
            </div>
            <div className='clients col-4'>
              <p>10K+</p>
              <p>properties for clients</p>
            </div>
            <div className='years col-4'>
              <p>16+</p>
              <p>years of experiance</p>
            </div>
          </div>
        </div>
        <div className='right-side col-6 '>
          <img src='./assets/Container-remove.png' className='col-12' />
        </div>
        <div className='containers   col-12 '>
          <div className=' find animate__fadeIn '  >
            <img src='./assets/house.png' id='house' />
            <p>Find Your Dream Home</p>
          </div>
          <div className='find animate__fadeIn'>
            <img src='./assets/value.png' id='unlock' />
            <p>Unlock Property Value</p>
          </div>
          <div className=' find animate__fadeIn'>
            <img src='./assets/building.png' id='management' />
            <p>Effortless Property Management</p>
          </div>
          <div className='find animate__fadeIn'>
            <img src='./assets/smart.png' id='smart' />
            <p>Smart Investments, Informed Decisions</p>
          </div>
        </div>
        <div className='featured-properties d-flex flex-wrap col-12'>
          <div id='prop-title' className='col-7'>
            <p className='title'>Featured Properties</p>

            <p id='content'>Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.</p>
          </div>
          <div className='col-12 d-flex p-3 ' id='prop-cards'>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination

              ]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="./assets/image1.png" className="card-img-top" alt="..." />
                <p id='location'>Coastal Escapes - Where Waves Beckon</p>
                <div className="card-body">
                  <h5 className="card-title">Seaside Serenity Villa</h5>
                  <p className="card-text">Wake up to the soothing melody of waves. This beachfront villa offers... Read More</p>
                  <p>Price : $1,250,000</p>
                  <Link to={"/Details"} className="btn " id='view-btn'>View Property Details</Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="./assets/image1.png" className="card-img-top" alt="..." />
                <p id='location'>Coastal Escapes - Where Waves Beckon</p>
                <div className="card-body">
                  <h5 className="card-title">Seaside Serenity Villa</h5>
                  <p className="card-text">Wake up to the soothing melody of waves. This beachfront villa offers... Read More</p>
                  <p>Price : $1,250,000</p>
                  <Link to={"/Details"} className="btn " id='view-btn'>View Property Details</Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="./assets/image2.png" className="card-img-top" alt="..." />
                <p id='location'>Urban Oasis - Life in the Heart of the City</p>

                <div className="card-body">
                  <h5 className="card-title">Metropolitan Haven</h5>
                  <p className="card-text">Immerse yourself in the energy of the city. This modern apartment in the heart... Read More</p>
                  <p>Price : $650,000</p>
                  <Link to={"/Details"} className="btn " id='view-btn'>View Property Details</Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="./assets/image3.png" className="card-img-top" alt="..." />
                <p id='location'>Countryside Charm - Escape to Nature's Embrace</p>
                <div className="card-body">
                  <h5 className="card-title">Rustic Retreat Cottage</h5>
                  <p className="card-text">Find tranquility in the countryside. This charming cottage is nestled amidst rolling hills... Read More</p>
                  <p>Price : $350,000</p>
                  <Link to={"/Details"} className="btn " id='view-btn'>View Property Details</Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="./assets/image3.png" className="card-img-top" alt="..." />
                <p id='location'>Countryside Charm - Escape to Nature's Embrace</p>
                <div className="card-body">
                  <h5 className="card-title">Rustic Retreat Cottage</h5>
                  <p className="card-text">Find tranquility in the countryside. This charming cottage is nestled amidst rolling hills... Read More</p>
                  <p>Price : $350,000</p>
                  <Link to={"/Details"} className="btn " id='view-btn'>View Property Details</Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="./assets/image3.png" className="card-img-top" alt="..." />
                <p id='location'>Countryside Charm - Escape to Nature's Embrace</p>
                <div className="card-body">
                  <h5 className="card-title">Rustic Retreat Cottage</h5>
                  <p className="card-text">Find tranquility in the countryside. This charming cottage is nestled amidst rolling hills... Read More</p>
                  <p>Price : $350,000</p>
                  <Link to={"/Details"} className="btn " id='view-btn'>View Property Details</Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="./assets/image3.png" className="card-img-top" alt="..." />
                <p id='location'>Countryside Charm - Escape to Nature's Embrace</p>
                <div className="card-body">
                  <h5 className="card-title">Rustic Retreat Cottage</h5>
                  <p className="card-text">Find tranquility in the countryside. This charming cottage is nestled amidst rolling hills... Read More</p>
                  <p>Price : $350,000</p>
                  <Link to={"/Details"} className="btn " id='view-btn'>View Property Details</Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="./assets/image3.png" className="card-img-top" alt="..." />
                <p id='location'>Countryside Charm - Escape to Nature's Embrace</p>

                <div className="card-body">
                  <h5 className="card-title">Rustic Retreat Cottage</h5>
                  <p className="card-text">Find tranquility in the countryside. This charming cottage is nestled amidst rolling hills... Read More</p>
                  <p>Price : $350,000</p>
                  <Link to={"/Details"} className="btn " id='view-btn'>View Property Details</Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="./assets/image3.png" className="card-img-top" alt="..." />
                <p id='location'>Countryside Charm - Escape to Nature's Embrace</p>
                <div className="card-body">
                  <h5 className="card-title">Rustic Retreat Cottage</h5>
                  <p className="card-text">Find tranquility in the countryside. This charming cottage is nestled amidst rolling hills... Read More</p>
                  <p>Price : $350,000</p>
                  <Link to={"/Details"} className="btn " id='view-btn'>View Property Details</Link>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className='col-12 d-flex flex-wrap' id='reviews'>
          <div id='rev-title' className='col-9 p-4'>
            <p style={{ fontSize: '48px' }}>What Our Clients Say</p>

            <p style={{ color: '#999999', fontSize: '18px' }}>Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.</p>
            <div id='rev-cards' className='d-flex  gap-3 '>
              <div className='card1 col-4 animate__fadeIn'>
                <img src='./assets/stars.png' id='stars' />
                <p style={{ fontSize: '24px', fontWeight: "600" }}>Exceptional Service!</p>
                <p style={{ fontSize: '18px', fontWeight: '500' }}>Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!</p>
                <div>
                  <img src='./assets/profile1.png' id='prof1' /> Wade Warren
                </div>
              </div>
              <div className='card2 col-4 '>
                <img src='./assets/stars.png' />
                <p style={{ fontSize: '24px', fontWeight: "600" }}>Efficient and Reliable</p>
                <p style={{ fontSize: '18px', fontWeight: '500' }}>Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.</p>
                <div>
                  <img src='./assets/profile2.png' id='prof2' /> Emelie Thomson
                </div>

              </div>
              <div className='card3 col-4'>
                <img src='./assets/stars.png' />
                <p style={{ fontSize: '24px', fontWeight: "600" }}>Trusted Advisors</p>
                <p style={{ fontSize: '18px', fontWeight: '500' }}>The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!</p>
                <div>
                  <img src='./assets/profile3.png' id='prof3' /> John Mans
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-12 d-flex flex-wrap' id='questions'>
          <div id='ques-title' className='col-9 p-4'>
            <p style={{ fontSize: '48px' }} >Frequently Asked Questions</p><br />
            <p style={{ color: '#999999', fontSize: '18px' }} >Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.</p>
          </div>
          <div id='ques-cards' className='d-flex col-12 gap-4 p-4 justify-content-between '>
            <div className="card col-4">
              <div className="card-body ">
                <h5 className="card-title">How do I search for properties on Estatein?</h5>
                <p className="card-text" style={{ color: '#999999', fontSize: '18px' }}>Learn how to use our user-friendly search tools to find properties that match your criteria.</p>
                <button className='btn '>Learn more</button>

              </div>
            </div>
            <div className="card col-4" >
              <div className="card-body">
                <h5 className="card-title">What documents do I need to sell my property through Estatein?</h5>
                <p className="card-text" style={{ color: '#999999', fontSize: '18px' }}>Find out about the necessary documentation for listing your property with us.</p>
                <button className='btn '>Learn more</button>

              </div>
            </div>
            <div className="card col-4" >
              <div className="card-body">
                <h5 className="card-title">How can I contact an Estatein agent?</h5>
                <p className="card-text" style={{ color: '#999999', fontSize: '18px' }}>Discover the different ways you can get in touch with our experienced agents.</p>
                <button className='btn '>Learn more</button>

              </div>
            </div>
          </div>
        </div>
      </div>




    </>
  )
}
