import { Link, useLocation } from "react-router-dom";
import 'animate.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";



export default function Nav() {
  const [theme, setTheme] = useState(false);
  const toggleTheme = () => {
    setTheme(!theme);
    console.log(!theme);
  }
  useEffect(() => {
    document.body.className = theme ? 'light-mode' : 'dark-mode';
    const footer = document.querySelector('footer');
    if (Nav) Nav.className = theme ? 'light-mode' : 'dark-mode';
    if (footer) footer.className = theme ? 'light-mode' : 'dark-mode';
  }, [theme]);



  return (
    <>
      <nav className='top-0 justify-content-between d-flex'>
        <div id='logo' className="col-2 ">
          <Link to={"/"}>


            <p>Estatein</p>
          </Link>
        </div>


        <div id="cats" className="btn  col-6 d-flex gap-3 justify-content-between  align-content-center">
          <Link to="/">
            <button className="btn " id='buy'>Home</button>
          </Link>
          <Link to="/AboutUs">
            <button className="btn " id='rent'>About Us</button>
          </Link>
          <Link to="/Properties">
            <button className="btn " id='properties'>Properties</button>
          </Link>

          <button id="mode" onClick={toggleTheme}>
            <FontAwesomeIcon icon={faCircleHalfStroke} size="xl" className={theme ? 'light-mode' : 'dark-mode'} />
          </button>
        </div>
        <div className="login col-2">

          <Link to={"/Login"}>
            <button className="login-btn btn">Login</button>
          </Link>
        </div>
        <div className="menu">
          <div className="dropdown">
            <a className="btn  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <FontAwesomeIcon icon={faBars} className="menu-btn" />
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"AboutUs"}>About Us</Link>
              </li>
              <li>
                <Link to={"Properties"}>Properties</Link>
              </li>
              <li>
                <Link to={"Login"}>Login</Link>
              </li>
            </ul>
          </div>
        </div>




      </nav>
    </>
  );
}