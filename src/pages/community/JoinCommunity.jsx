import { useState } from 'react';
import './community.css';
import Comm from '/images/comm.jpg';
import Map from '../../components/Map';
import Footer from '../../components/footer/Footer';

const JoinCommunity = () => {
  const [form, setForm] = useState({
    fullname: '',
    phone: '',
    email: '',
  });

  const [website, setWebsite] = useState(''); // honeypot
  const [startTime] = useState(Date.now());

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const { fullname, phone, email } = form;

    if (!fullname || !phone || !email) {
      return 'All fields are required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Invalid email address';
    }

    const phoneRegex = /^[0-9+]{10,15}$/;
    if (!phoneRegex.test(phone)) {
      return 'Invalid phone number';
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validate();
    if (error) {
      setStatus(error);
      return;
    }

    setLoading(true);
    setStatus('Submitting...');

    try {
      const res = await fetch('https://purposepalmoil.com/purpose-api/join-community.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          website,
          time: Date.now() - startTime,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('You’ve successfully joined the community!');

        // reset form
        setForm({
          fullname: '',
          phone: '',
          email: '',
        });
      } else {
        setStatus(data.message || 'Submission failed');
      }
    } catch {
      setStatus('Server error. Try again later.');
    }

    setLoading(false);
  };
  return (
    <section className="community__section">
      <div className="comm__container container">
        <div className="comm__banner">
          <h2>Join the Purpose Palm Oil Community</h2>
        </div>
        <div className="comm__content">
          <div className="comm__card">
            <p>We've made it easy for you to always have access to quality palm oil Anytime, Anywhere.</p>
            <p>When you join our community, you will always be able to get palm oil whenever you need it without having to ask . </p>
            <p>
              You can subscribe to have it delivered to your home periodically or walk into any of our partner supermarkets or stores and pick it up easily
              without pay . Your access to quality palm oil is always available.
            </p>
            <p>As a member, we also give you more than just palm oil:</p>
            <ul>
              <li>Simple cooking recipes you can try at home</li>
              <li>Updates on fresh batches and the best time to buy</li>
              <li>Helpful tips on healthy cooking and everyday meals</li>
              <li>Invitations to community hangouts, games, and special experiences</li>
            </ul>
            <p>
              You can subscribe weekly or monthly, pay ahead, or use a flexible Payment plan that works for you. The goal is simple; to make quality palm oil
              always available to you.
            </p>
            <p>You're not just buying palm oil. You're part of a community.</p>
            <p>You're welcome here.</p>
          </div>
          <div className="comm__img">
            <img src={Comm} alt="" />
          </div>
        </div>
        <div className="comm__form join">
          <h3>Join Our Community</h3>

          <form onSubmit={handleSubmit} className="join__form">
            {/* Honeypot */}
            <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} style={{ display: 'none' }} />

            <input type="text" name="fullname" placeholder="Full Name" value={form.fullname} onChange={handleChange} />

            <input type="text" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />

            <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} />

            {status && <p className="status">{status}</p>}

            <button type="submit" disabled={loading}>
              {loading ? 'Submitting...' : 'Join Community'}
            </button>
          </form>
        </div>
      </div>
      <Map />
      <Footer />
    </section>
  );
};

export default JoinCommunity;
