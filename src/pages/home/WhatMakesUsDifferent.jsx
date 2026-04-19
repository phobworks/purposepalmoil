import { Link } from 'react-router-dom';
import { useModal } from '../../components/ModalContext';

const WhatMakesUsDifferent = () => {
  const { openModal } = useModal();
  return (
    <section className="whatmakesusdifferent">
      <div className="what__container container">
        <div className="what__small">
          <span></span>
          <small>What makes us different</small>
        </div>
        <div className="what__content">
          <div className="what__cards">
            <h2>Purpose palm oil built for how you actually cook</h2>
          </div>
          <div className="what__cards">
            <p>
              Founded in January 2025, Purpose Palm Oil has developed a proprietary purification system designed by its founder to enhance palm oil quality
              through an advanced separation and refinement process. The company produces two distinct functional variants:
            </p>
            <ul>
              <li>Palm oil for stews and sauces</li>
              <li>Palm oil for soups and porridges</li>
            </ul>
            <div className="what__btns">
              <div className="explore__btn">
                <Link to="/products">Explore our varient</Link>
              </div>
              <div className="get__btns">
                <button onClick={openModal}>Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;
