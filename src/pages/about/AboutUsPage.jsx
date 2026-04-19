import c4 from '/images/c4.jpg';

const AboutUsPage = () => {
  return (
    <section className="ab-us__section">
      <div className="ab-us__container container">
        <div className="ab-us__content">
          <div className="highly-unsat__content">
            <div className="highly__text1 area-1">
              <small>PURPOSE PALM OIL</small>
              <h3></h3>
              <p>
                Founded in January 2025, Purpose Palm Oil has developed a proprietary purification system designed by its founder to enhance palm oil quality
                through an advanced separation and refinement process. The company produces two distinct functional variants:
                <ul>
                  <li>Palm oil for stews and sauces</li>
                  <li>Palm oil for soups and porridges</li>
                </ul>
              </p>
            </div>
            <div className="highly__img area-2">
              <img src={c4} alt="" />
            </div>
            <div className="highly__text2 area-3">
              <small>
                <span></span>
              </small>
              <p>
                Purpose Palm Oil is Nigeria's first unsaturated palm oil designed to improve how you cook and what you consume. A well processed palm oil,
                that's we refined and tailored to suit how you actually cook, with specific variants for soups & porridge and stews & sauce.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
