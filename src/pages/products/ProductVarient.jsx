import p2 from '/images/p2.jpg';
import p3 from '/images/p3.jpg';

const ProductVarient = () => {
  return (
    <section className="pv__section">
      <div className="pv__container container">
        <div className="pv__content">
          <div className="welcome__small">
            <span></span>
            <small>Product showcase</small>
          </div>
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
                <h3>STEW &amp; SAUCE </h3>
                <small> - Highly Unsaturated - cholesterol free </small>
              </div>
              <p>PRODUCT DESCRIPTION</p>
              <p>
                A highly unsaturated palm oil crafted for healthier cooking. Carefully purified and naturally rich in antioxidants and essential nutrients, it
                delivers the authentic natural taste of palm oil while supporting a more balanced fat intake.
              </p>

              <p>
                Enhances the natural color and flavor of your cooking while giving stews and sauces the smooth, rich flow and signature palm oil taste they
                deserve.
              </p>
              <p>Perfect for tomato stew, pepper sauce, jollof base, and everyday sauces.</p>
              <ul>
                <li>Ingredients: Palm oil. </li>
                <li>Nutritional facts </li>
                <li>Palm olein </li>
                <li>Trans Fat: 0g </li>
                <li>Unsaturated fat: 65.8g </li>
                <li>Vitamin E: 71mg</li>
                <li>Vitamin A: ✅</li>
                <li>Energy: 887 kcal </li>
                <li>Total fat: 99.3g</li>
              </ul>
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
              <p>Perfect for egusi, ogbono, Abacha, afang, yam porridge, and </p>
              <ul>
                <li>Ingredients: Palm oil </li>
                <li>Palm Stearin </li>
                <li>Trans Fat: 0g </li>
                <li>Saturated fat: 61.90g </li>
                <li>Vitamin E: 71mg</li>
                <li>Vitamin A: ✅</li>
                <li>Energy: 887 kcal </li>
                <li>Total fat: 98.6g</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductVarient;
