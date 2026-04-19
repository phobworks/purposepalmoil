import { links } from '../../data';
import { Link, NavLink } from 'react-router-dom';
import Logo from '/images/logo.png';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <section className="footer__section">
      <div className="footer__container container">
        <div className="footer__content">
          <div className="footer__link">
            <ul className="footer__links">
              {links.map(({ name, path }, index) => {
                return (
                  <li key={index}>
                    <NavLink to={path} onClick={() => setIsNavShowing(false)} className={({ isActive }) => (isActive ? 'active-nav' : '')}>
                      {name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="footer__logo">
            <Link>
              <img src={Logo} alt="" />
            </Link>
          </div>
        </div>
        <div className="footer__copyrights">
          <div className="footer__1">
            <p>2026 Purpose Palm Oil. All rights reserved.</p>
          </div>
          <div className="footer__2">
            <p>Nigeria's First Unsaturated Palm Oil</p>
          </div>
          <div className="footer__3">
            <ul>
              <li className="btn-facebook">
                <Link to="">
                  <FaFacebook />
                </Link>
              </li>
              <li className="btn-instagram">
                <Link to="">
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
