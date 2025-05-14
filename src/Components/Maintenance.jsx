import { faFacebookF, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'
import { faGears, faPhone, faScrewdriverWrench, faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Maintenance() {
  return (
    <>
      <main id='Maintenance'>
        <div className="maintenance-div d-flex flex-wrap col-12 justify-content-center">
          <div className="maint-p col-8">
            <p>Estatein is temporarily unavailable while we perform essential maintenance. Thank you for your patience.</p>
          </div>
          <div className="maint-icon col-12 d-flex justify-content-center">
            <FontAwesomeIcon icon={faGears} size='2xl' />
          </div>
        </div>
        <div className="maint-contact col-12 d-flex flex-wrap justify-content-center">
          <p>To contact us </p>
          <div className="contact-methods col-12 d-flex justify-content-center">
            <div className="maint-links col-6 d-flex justify-content-evenly pt-3">

            <a href='#' target='_blank'>
              <FontAwesomeIcon icon={faPhone} size='2xl' />
            </a>
            <a href='https://www.facebook.com/' target='_blank'>
              <FontAwesomeIcon icon={faFacebookF} size='2xl' />
            </a>
            <a href='https://mail.google.com/' target='_blank'>
              <FontAwesomeIcon icon={faSquareEnvelope} size='2xl' />
            </a>
            <a href='https://web.whatsapp.com/' target='_blank'>
              <FontAwesomeIcon icon={faWhatsappSquare} size='2xl'  />
            </a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
