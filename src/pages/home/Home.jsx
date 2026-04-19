import { useState } from 'react';
import OrderModal from '../../components/nav/OrderModal';
import AchievmentBanner from '../../components/AchievmentBanner';
import Footer from '../../components/footer/Footer';
import Map from '../../components/Map';
import Testimonials from '../../components/Testimonials';
import './home.css';
import HomeBanner from './HomeBanner';
import HomeContact from './HomeContact';
import HomeServices from './HomeServices';
import WelcomeNotes from './WelcomeNotes';
import WhatMakesUsDifferent from './WhatMakesUsDifferent';

const Home = () => {
  // const [showModal, setShowModal] = useState(false);

  return (
    <>
      <HomeBanner />
      <AchievmentBanner />
      <WelcomeNotes />
      <WhatMakesUsDifferent onOrderClick={() => setShowModal(true)} />
      <HomeServices />
      <Testimonials />
      <HomeContact />
      <Map />
      <Footer />
      {/* {showModal && <OrderModal onClose={() => setShowModal(false)} />} */}
    </>
  );
};

export default Home;
