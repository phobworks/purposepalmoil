import { Link, NavLink } from 'react-router-dom';
import Logo from '/images/logo.png';
import { links } from '../../data';
import './Navbar.css';
import { MdClose } from 'react-icons/md';
import { HiOutlineMenu } from 'react-icons/hi';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
// import OrderModal from './OrderModal';
import { useModal } from '../../components/ModalContext';

import { useState, useRef } from 'react';

const Navbar = () => {
  const { openModal } = useModal();
  const [isNavShowing, setIsNavShowing] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  const touchStartX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    const touchEndX = e.touches[0].clientX;
    if (touchStartX.current - touchEndX > 80) {
      setIsNavShowing(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="container nav__container">
        <Link to="/" className="logo">
          <img src={Logo} alt="Logo Image" />
        </Link>
        <ul onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
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
        <div className="nav__actions">
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
          <button className="shop__now" onClick={openModal}>
            Order Now
          </button>
        </div>
        <button className="nav__toggle-btn" onClick={() => setIsNavShowing(!isNavShowing)}>
          {isNavShowing ? <MdClose /> : <HiOutlineMenu />}
          <span></span>
        </button>
      </div>
      {/* {showModal && <OrderModal onClose={() => setShowModal(false)} />} */}
    </nav>
  );
};

export default Navbar;
