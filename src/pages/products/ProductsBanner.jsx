import p1 from '/images/p1.jpg';

const ProductsBanner = () => {
  return (
    <section className="about-page__section">
      <div className="about-page__container container">
        <div className="about-page__content">
          <div className="ab-content__left">
            <div className="what__small">
              <span></span>
              <small>Our Products</small>
            </div>
            <div className="ab-content__text">
              <h1>Palm oil refined for how you actually cook.</h1>
              <p>
                Purpose Palm Oil is Nigerians first innovated agribusiness focused on producing unsaturated, health-conscious, and structurally differentiated
                palm oil products for households and food businesses.
              </p>
            </div>
          </div>
          <div className="ab-content__right">
            <img src={p1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsBanner;
