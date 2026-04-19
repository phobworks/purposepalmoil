import c21 from '/images/c21.jpg';

const AboutBanner = () => {
  return (
    <section className="about-page__section">
      <div className="about-page__container container">
        <div className="about-page__content">
          <div className="ab-content__left">
            <div className="what__small">
              <span></span>
              <small>Our story</small>
            </div>
            <div className="ab-content__text">
              <h1>
                From vision to table: <span>How Purpose Palm Oil began</span>
              </h1>
              <p>
                Purpose Palm Oil is Nigerians first innovated agribusiness focused on producing unsaturated, health-conscious, and structurally differentiated
                palm oil products for households and food businesses.
              </p>
            </div>
          </div>
          <div className="ab-content__right">
            <img src={c21} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
