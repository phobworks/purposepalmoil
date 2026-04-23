import p2 from '/images/p2.jpg';
import p3 from '/images/p3.jpg';
import { useModal } from '../../components/ModalContext';

const ProductVarient = () => {
  const { openModal } = useModal();
  return (
    <section className="pv__section">
      <div className="pv__container container">
        <div className="pv__content">
          {/* <div className="welcome__small">
            <span></span>
            <small>Product showcase</small>
          </div> */}
          <h2>See our premium palm oil variants</h2>
          <p>Refined for your kitchen. Two specialized formulations designed to enhance soups, porridges, stews, and sauces with consistent quality.</p>
        </div>
        <div className="pv__types">
          <div className="pv__card">
            <div className="pv__img">
              <img src={p2} alt="" />
            </div>
            <div className="pv-card__content">
              <div className="pv-card__header">
                <h3>STEW &amp; SAUCE VARIETY</h3>
                <small> - Highly Unsaturated - cholesterol free </small>
              </div>
              <p>PRODUCT DESCRIPTION</p>
              <p>This is a Highly unsaturated palm oil variant, carefully separated for healthier cooking and a perfect texture for your stews and sauces.</p>

              <p>Properly purified, it retains its natural richness while delivering a smoother, lighter cooking experience.</p>
              <p>
                It remains pure and unaltered , retaining its natural antioxidants, nutrients, color, and authentic taste, with no additives or unnecessary
                processing.
              </p>
              <p>
                Designed specifically for stews and sauces, it enhances flavor, improves texture, and delivers a smooth, rich flow with the signature depth palm
                oil is known for.
              </p>
              <p>Perfect for tomato stew, pepper sauce, jollof base, and everyday cooking.</p>
              <ul>
                <li>Ingredients: Palm oil (palm olein) </li>
                <li>Nutritional facts </li>
                <li>Palm olein </li>
                <li>Trans Fat: 0g </li>
                <li>Unsaturated fat: 65.8g </li>
                <li>Vitamin E: 71mg</li>
                <li>Vitamin A: ✅</li>
                <li>Energy: 887 kcal </li>
                <li>Total fat: 99.3g</li>
              </ul>
              <div className="get__btns order__btn">
                <button onClick={openModal}>Order Now</button>
              </div>
            </div>
          </div>

          <div className="pv__card">
            <div className="pv__img">
              <img src={p3} alt="" />
            </div>
            <div className="pv-card__content">
              <div className="pv-card__header">
                <h3>SOUP & PORRIDGE VARIETY </h3>
                <small> - cholesterol free</small>
              </div>
              <p>PRODUCT DESCRIPTION</p>
              <p>
                Naturally extracted and properly packaged. Rich in natural nutrients and antioxidants, it delivers the traditional richness and stability needed
                for soups and slow-cooked meals.
              </p>
              <p>Adds thickness, depth of flavor, and strong seasoning infusion, giving soups and porridges a fuller taste and satisfying body.</p>
              <p>Perfect for egusi, ogbono, Abacha, afang, yam porridge</p>
              <ul>
                <li>Ingredients: Palm oil(palm stearin) </li>
                <li>Palm Stearin </li>
                <li>Trans Fat: 0g </li>
                <li>Saturated fat: 61.90g </li>
                <li>Vitamin E: 71mg</li>
                <li>Vitamin A: ✅</li>
                <li>Energy: 887 kcal </li>
                <li>Total fat: 98.6g</li>
              </ul>
              <div className="get__btns order__btn">
                <button onClick={openModal}>Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductVarient;
