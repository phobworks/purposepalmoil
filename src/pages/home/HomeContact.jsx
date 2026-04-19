import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';

const HomeContact = () => {
  const email = 'info@purposepalmoil.com'; // replace
  const phone = '+2348106861310'; // replace (use full intl format)

  return (
    <section className="home-cont__section">
      <div className="home-cont__container container">
        <div className="home-cont__content">
          <h2>Connect with Purpose Palm Oil today</h2>
          <p>
            Have questions about our palm oil variants or interested in wholesale? Reach out and let's talk about bringing quality to your kitchen or business.
          </p>

          <div className="what__btns">
            <div className="explore__btn explore__btn2">
              <MdEmail />
              <a href={`mailto:${email}?subject=Inquiry about Palm Oil&body=Hello, I would like to know more about your products.`}>Get a Quote</a>
            </div>
            <div className="get__btns get__btns2">
              <FaPhoneAlt />
              <a href={`tel:${phone}`}>Speak to Us Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
