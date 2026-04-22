import s1 from '/images/s1.jpg';
import s2 from '/images/s2.jpg';
import s3 from '/images/s3.jpg';
import g1 from '/images/g1.jpg';
import g2 from '/images/g2.jpg';
import g3 from '/images/g3.jpg';
import { Link } from 'react-router-dom';

const HomeServices = () => {
  return (
    <section className="home-services__section">
      <div className="home-services__container container">
        <div className="home-services__content">
          <div className="home-s__cards">
            <img src={s1} alt="" />
            {/* <h3>Palm Oil Varieties</h3> */}
            <p>Highly unsaturated palm oil for stews and sauces — lighter and better for healthier cooking</p>
            <div className="home-services__btn">
              <Link to="/Products">Read more</Link>
            </div>
          </div>
          <div className="home-s__cards">
            <img src={s2} alt="" />
            {/* <h3>Purpose Community Package</h3> */}
            <p>Palm oil for soups and porridges — richer and suited for traditional meals</p>
            <div className="home-services__btn">
              <Link to="/Products">Read more</Link>
            </div>
          </div>
          <div className="home-s__cards">
            <img src={s3} alt="" />
            {/* <h3>Purpose Community Package</h3> */}
            <p>Access to fresh oil anytime you need it</p>
            <div className="home-services__btn">
              <Link to="/Products">Read more</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="highly-unsat__container container">
        <div className="highly-unsat__content">
          <div className="highly__text1 area-1">
            <small>
              STEW &amp; SAUCE <small>- Highly Unsaturated-cholesterol free</small>
            </small>
            <h3>PRODUCT DESCRIPTION</h3>
            <p>
              A highly unsaturated palm oil crafted for healthier cooking. Carefully purified and naturally rich in antioxidants and essential nutrients, it
              delivers the authentic natural taste of palm oil while supporting a more balanced fat intake.
            </p>
          </div>
          <div className="highly__img area-2">
            <img src={g1} alt="" />
          </div>
          <div className="highly__text2 area-3">
            <small>
              <span>01</span>
            </small>
            <p className="short__text">
              Enhances the natural color and flavor of your cooking while giving stews and sauces the smooth, rich flow and signature palm oil taste they
              deserve. Perfect for tomato stew, pepper sauce, jollof base, and everyday sauces.
            </p>
            <div className="highly__btn">
              <Link to="/Products">Read more</Link>
            </div>
          </div>
          <div className="highly__img area-4">
            <img src={g2} alt="" />
          </div>
          <div className="highly__text1 area-5">
            <small>
              <span>02</span> SOUP &amp; PORRIDGE VARIETY <small>- cholesterol free</small>
            </small>
            <h3>PRODUCT DESCRIPTION</h3>
            <p className="short__text">
              Naturally extracted and properly packaged. Rich in natural nutrients and antioxidants, it delivers the traditional richness and stability needed
              for soups and slow-cooked meals.
            </p>

            <div className="highly__btn">
              <Link to="/Products">Read more</Link>
            </div>
          </div>
          <div className="highly__img area-6">
            <img src={g3} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
