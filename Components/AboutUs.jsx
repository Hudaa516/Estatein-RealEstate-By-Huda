import React from 'react'


export default function AboutUs() {
  return (
    <>
      <main className='AboutUs'  >
      <div className='hero-section col-12 d-flex justify-content-around '>
          <div className='col-6 d-flex flex-wrap' id='journey'>
            <div className=' titles col-12'>
              <p className='jur-title'>Our Journey</p>
              <p className='jur-p'>Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.</p>
            </div>
          </div>
          <div className='col-6 p-3' id='about-img'>
            <img src='./assets/home.png' />
          </div>
        </div>
        <div className='value col-12 p-5  d-flex flex-wrap'>
          <div className=' our-value col-4 p-4' >
            <p style={{ fontSize: '48px', fontWeight: '600' }}>Our Values</p>
            <p style={{ fontSize: '18px', color: '#999999' }}>Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.</p>
          </div>
          <div className='value-cards col-8 d-flex justify-content-between  '>
            <div className="cards d-flex flex-wrap justify-content-center ">
              <div className='trust'>
                <img src='./assets/trust.png' />
                <p>Trust</p>
                <p>Trust is the cornerstone of every successful real estate transaction.</p>
              </div>
              <div className='excellence '>
                <img src='./assets/excellence.png' />
                <p>Excellence</p>
                <p>We set the bar high for ourselves. From the properties we list to the services we provide.</p>
              </div>
              <div className='centric  '>
                <img src='./assets/centric.png' />
                <p>Client-Centric</p>
                <p>Your dreams and needs are at the center of our universe. We listen, understand.</p>
              </div>
              <div className='commitment '>
                <img src='./assets/trust.png' />
                <p>Our Commitment</p>
                <p>We are dedicated to providing you with the highest level of service, professionalism, and support.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='our-achievements col-12 d-flex flex-wrap' >
          <div className='achieve-title col-7 p-5'>
            <h2>Our Achievements</h2>
            <p style={{ color: '#999999' }}>Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.</p>
          </div>
          <div className=' achieve-cards d-flex flex-wrap  col-12 justify-content-around'>
            <div className='col-3 p-3 achieve-card'>
              <p style={{ fontSize: '30px' }}>3+ Years of Excellence</p>
              <p style={{ color: '#999999', fontSize: '18px' }}>With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.</p>
            </div>
            <div className='col-3 p-3 achieve-card'>
              <p style={{ fontSize: '30px' }}>Happy Clients</p>
              <p style={{ color: '#999999', fontSize: '18px' }}>Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.</p>
            </div>
            <div className='col-3 p-3  achieve-card'>
              <p style={{ fontSize: '30px' }}>Industry Recognition</p>
              <p style={{ color: '#999999', fontSize: '18px' }}>We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.</p>
            </div>
          </div>
          <div
          ></div>
        </div>
        <div className='steps col-12 d-flex flex-wrap' >
          <div className='steps-title col-12 p-5' >
            <p style={{ fontSize: '48px' }}>Navigating the Estatein Experience</p>
            <p style={{ fontSize: '18px', color: '#999999' }}>At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.</p>
          </div>
          <div className='steps-cards col-12 d-flex flex-wrap justify-content-around ' >
            <div className="step-card col-4">
              <div className="card-header">
                Step 01
              </div>
              <hr />

              <div className="card-body">
                <h5 className="card-title">Discover a World of Possibilities</h5>
                <p className="card-text">Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.</p>
              </div>
            </div>
            <div className="step-card col-4">
              <div className="card-header">
                Step 02
              </div>
              <hr />
              <div className="card-body">
                <h5 className="card-title">Narrowing Down Your Choices</h5>
                <p className="card-text">Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.</p>
              </div>
            </div>
            <div className="step-card col-4">
              <div className="card-header">
                Step 03
              </div>
              <hr />

              <div className="card-body">
                <h5 className="card-title">Personalized Guidance</h5>
                <p className="card-text">Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.</p>
              </div>
            </div>
            <div className="step-card col-4">
              <div className="card-header">
                Step 04
              </div>
              <hr />

              <div className="card-body">
                <h5 className="card-title">See It for Yourself</h5>
                <p className="card-text">Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.</p>
              </div>
            </div>
            <div className="step-card col-4">
              <div className="card-header">
                Step 05
              </div>
              <hr />

              <div className="card-body">
                <h5 className="card-title">Making Informed Decisions</h5>
                <p className="card-text">Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.</p>
              </div>
            </div>
            <div className="step-card col-4">
              <div className="card-header">
                Step 06
              </div>
              <hr />

              <div className="card-body">
                <h5 className="card-title">Getting the Best Deal</h5>
                <p className="card-text">We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
