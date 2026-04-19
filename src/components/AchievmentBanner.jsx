import { Marquee } from '@chakra-ui/react';
import { FaBottleWater, FaPeopleGroup, FaHandshakeSimple } from 'react-icons/fa6';
import { MdLocationOn } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';

const items = [
  { icon: <FaBottleWater />, value: '1M+', label: 'BOTTLES SOLD' },
  { icon: <FaPeopleGroup />, value: '3000 - 5000+', label: 'CONSUMERS REACHED' },
  { icon: <MdLocationOn />, value: '2 MAJOR LAUNCHES', label: 'PORT HARCOURT - LAGOS' },
  // { icon: <FaHandshakeSimple />, value: '5 ROI', label: 'INVESTORS' },
];

const AchievmentBanner = () => {
  return (
    <section className="enable-animation">
      <div className="marquee">
        {/* <div className="marquee__track"> */}
        {/* GROUP 1 */}
        <ul className="marquee__content">
          {items.map((item, i) => (
            <div className="marquee-banner" key={`a-${i}`}>
              <div className="marq__icon">{item.icon}</div>
              <div className="marq__text">
                <p>{item.value}</p>
                <small>{item.label}</small>
              </div>
            </div>
          ))}
        </ul>

        {/* GROUP 2 (exact duplicate) */}
        <ul aria-hidden="true" className="marquee__content">
          {items.map((item, i) => (
            <div className="marquee-banner" key={`b-${i}`}>
              <div className="marq__icon">{item.icon}</div>
              <div className="marq__text">
                <p>{item.value}</p>
                <small>{item.label}</small>
              </div>
            </div>
          ))}
        </ul>
        {/* </div> */}
      </div>
    </section>
  );
};

export default AchievmentBanner;
