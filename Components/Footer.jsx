import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faArrowTurnUp, faCircleArrowUp, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const BackToTopButton = () => {
        const handleClick = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        return (
            <button id='totop' onClick={handleClick} style={{ display: showButton ? 'block' : 'none' }}>
                <FontAwesomeIcon icon={faCircleArrowUp} size='2xl' />            </button>
        );
    };
    return (
        <>
            <footer className='d-flex flex-wrap justify-content-evenly'>

                <div className=' footer-logo col-12'>

                    <h1>Estatein</h1>
                </div>

                <div className=' upper-footer col-12 d-flex justify-content-around ' >
                    <div className=' footer-info col-4 d-flex flex-wrap' >
                        <ul>
                            <li>
                                <p><FontAwesomeIcon icon={faLocationDot} /> Address: Cairo,Egypt.</p>
                            </li>
                            <li>
                                <p><FontAwesomeIcon icon={faEnvelope} /> Househunt@gmail.com </p>
                            </li>
                            <li>
                                <p><FontAwesomeIcon icon={faPhone} /> 01234567890</p>
                            </li>
                        </ul>
                    </div>
                    <div className=' about col-4' >
                        <Link to={"/AboutUs"}>

                            <p>About us</p>
                        </Link>
                        <p>Careers</p>

                    </div>
                    <div className=' footer-social col-4 d-flex gap-3 justify-content-center' >
                        <a href='https://www.facebook.com/' id='facebook' target='_blank'>
                            <FontAwesomeIcon icon={faFacebook} size='2xl' />
                        </a>
                        <a href='https://www.instagram.com/' id='insta' target='_blank'>
                            <FontAwesomeIcon icon={faInstagram} size='2xl' />
                        </a>
                        <a href='https://www.linkedin.com/feed/' id='linkedin' target='_blank'>
                            <FontAwesomeIcon icon={faLinkedin} size='2xl' />
                        </a>
                    </div>

                </div>

                <hr />
                <div className=" down-footer d-flex col-12 justify-content-center " >
                    <div className=" terms col-4 d-flex justify-content-around  ">

                        <a href="#">Terms & Conditions</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Cookies Policy</a>

                    </div>
                </div>
                <div className='top' style={{ background: 'none' }}>

                    <BackToTopButton />
                </div>
            </footer >
        </>
    )
}
