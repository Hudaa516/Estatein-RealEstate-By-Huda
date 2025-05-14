import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


import { FreeMode, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
export default function Properties() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: '',
    email: '',
    phone: '',
    location: '',
    propType: '',
    baths: '',
    beds: '',
    budget: '',
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('form', JSON.stringify(FormData));

    console.log(form);
    setForm({
      firstName: "",
      lastName: '',
      email: '',
      phone: '',
      location: '',
      propType: '',
      baths: '',
      beds: '',
      budget: '',
    });

  }
  return (
    <>
      <main className='Properties' >
        <div className=' discover col-12 d-flex flex-wrap' >
          <div className='discover-title col-7 p-5'>
            <p style={{ fontSize: '48px' }}>Discover a World of Possibilities</p>
            <p style={{ fontSize: '18px', color: '#999999' }}>Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home</p>
          </div>
          <div className='col-12 discover-cards d-flex justify-content-center '>
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
        <div className='form-prop col-12 d-flex flex-wrap p-5' >
          <div className='form-title col-10  '>
            <p style={{ fontSize: '48px' }}>Let's Make it Happen</p>
            <p style={{ fontSize: '18px', color: '#999999' }}>Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together.</p>
          </div>
          <form className='d-flex flex-wrap col-12 p-5'>
            <div className="first-name col-3">
              <label htmlFor="text">
                <p>First Name</p>
                <input type="text" id="ftname" value={form.firstName} placeholder='Enter First Name' required />
              </label>
            </div>
            <div className="last-name col-3">
              <label htmlFor="text">
                <p>Last Name</p>
                <input type="text" id="ltname" value={form.lastName} placeholder='Enter Last Name' required />
              </label>
            </div>
            <div className="email col-3">
              <label htmlFor="email">
                <p>Email</p>
                <input type="email" id="email" value={form.email} placeholder='Enter your Email' required />
              </label>
            </div>
            <div className="phone col-3">
              <label htmlFor="phone">
                <p>Phone</p>
                <input type="phone" id="phone" value={form.phone} placeholder='Enter Phone Number' required />
              </label>
            </div>
            <div className="location col-3">
              <label htmlFor="select" id='location' >
                <p>Preferred Location</p>
                <select>
                  <option hidden disabled select >Location</option>
                  <option>Cairo</option>
                  <option>Alexandria</option>
                  <option>Aswan</option>
                  <option>Giza</option>
                </select>
              </label>
            </div>
            <div className="type col-3">
              <label htmlFor="select" id='type'>
                <p>Property type</p>
                <select>
                  <option  hidden disabled select>Type</option>
                  <option>Apartmant</option>
                  <option>House</option>
                  <option>Villa</option>
                </select>
              </label>
            </div>
            <div className="type col-3">
              <label htmlFor="select">
                <p>No. of bathrooms</p>
                <select>
                  <option hidden disabled select>No.</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>+7</option>
                </select>
              </label>
            </div>
            <div className="type col-3">
              <label htmlFor="select" >
                <p>No. of bedrooms</p>
                <select>
                  <option hidden disabled select>No.</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>+7</option>
                </select>
              </label>
            </div>
            <div className="type" id='budget' >
              <label htmlFor="select" >
                <p>Budget</p>
                <select>
                  <option disabled hidden selected>select</option>
                  <option>From 500,000 To 1,000,000</option>
                  <option>From 1,000,000 To 2,000,000</option>
                  <option>From 2,000,000 To 3,000,000</option>
                </select>
              </label>
            </div>
            <div className="message col-12">
              <label htmlFor="text">
                <p>Message</p>
                <input type="text" id="message" placeholder='Enter Your Message Here' />
              </label>
            </div>
            <div className='col-12 d-flex flex-wrap justify-content-between p-5'>
              <label>
                <input type="checkbox" />
                I agree with Terms of Use and Privacy Policy
              </label>
              <button className='btn sub-btn' onSubmit={(e) => handleSubmit(e)}>Send Your Message</button>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}
