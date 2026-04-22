import CEO from '/images/ceo.jpeg';

const WelcomeNotes = () => {
  return (
    <section className="welcome-note__section">
      <div className="welcome__grid container">
        <div className="welcome-note__container ">
          <div className="welcome__small">
            <span></span>
            <small>Welcome Note from the CEO</small>
          </div>
          <div className="welcome__content">
            <p>Hi, I'm Alaba.</p>
            <p>
              If you're here, it means one thing - you definitely care about what goes into your food. Purpose Palm Oil was borne out of a simple realization:
            </p>
            <p>palm oil is used every day, but very few persons like you care about the quality of what is bought. </p>
            <p>To ensure health safety for all, the number of persons in this category has to increase, hence the birth of Purpose Palm Oil. </p>
            <p>
              This system has been built to timely source good oil, refine it, safely store it, and make sure what you get is the best, consistent, and worth
              the value of money spent for purchase, and for the most part a safe health for all our customers.
            </p>
            <p>This isn't just business for me, it's a system that is set to bring change at all cost in the Palm Oil industry. </p>
            <p>Welcome, have the best of experience from us, and give us feedbacks necessary to improve our services. Cheers.</p>
          </div>
        </div>
        <div className="welcome-note__img">
          <img src={CEO} alt="" />
        </div>
      </div>
    </section>
  );
};

export default WelcomeNotes;
