import './about.css';
import AboutBanner from './AboutBanner';
import AchievmentBanner from '../../components/AchievmentBanner';
import Footer from '../../components/footer/Footer';
import WelcomeNotes from '../../pages/home/WelcomeNotes';
import AboutUsPage from './AboutUsPage';
import Testimonials from '../../components/Testimonials';
import Map from '../../components/Map';

const About = () => {
  return (
    <>
      <AboutBanner />
      <AchievmentBanner />
      <WelcomeNotes />
      <AboutUsPage />
      <Testimonials />
      <Map />
      <Footer />
    </>
  );
};

export default About;
