import './contact.css';
import Footer from '../../components/footer/Footer';
import Map from '../../components/Map';
import { MdEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa6';
import { IoLocation } from 'react-icons/io5';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <>
      <section className="contant__section">
        <div className="contact__container container">
          <div className="contact__content">
            <div className="welcome__small welcome__contact">
              <span></span>
              <small>Get in touch</small>
            </div>
            <h2>We're ready to help</h2>
            <p>Send us a message with your questions about Purpose Palm Oil or to place an order. We'll respond as soon as we can.</p>
            <div className="contact__cont">
              <p>
                <MdEmail /> info@purposepalmoil.com
              </p>
              <p>
                <FaPhone /> +2348106861310
              </p>
              <p>
                <IoLocation />
                RX9M+F3R, Ikwerre Rd, New GRA, Port Harcourt 500272, Rivers
              </p>
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
      <Map />
      <Footer />
    </>
  );
};

export default Contact;
