import './home.css';
import { PiHeartbeatBold } from 'react-icons/pi';
import { BsDroplet } from 'react-icons/bs';
import { LuCookingPot } from 'react-icons/lu';
import bannerImg from '/images/bannerImg.jpg';

const HomeBanner = () => {
  return (
    <section
      className="home__banner"
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      <div className="banner__container">
        <div className="home__banner-section container">
          <div className="home__banner-content container">
            <small>Innovation in Every Drop</small>
            <h1>Pure, Refined, Perfected</h1>
            <h3>For Healthier Living</h3>
            <p>Proprietary purification system ensures superior quality palm oil for every meal.</p>
          </div>
          <div className="home__banner-content-2 container">
            <div className="banner__card">
              <div className="banner__card-icon">
                <PiHeartbeatBold />
              </div>
              <p>HIGHLY UNSATURATED</p>
            </div>
            <div className="banner__card">
              <div className="banner__card-icon">
                <BsDroplet />
              </div>
              <p>NATURAL</p>
            </div>
            <div className="banner__card">
              <div className="banner__card-icon">
                <LuCookingPot />
              </div>
              <p>NUTRITIOUS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
