import './products.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NewsLetter = () => {
  const [showInput, setShowInput] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  // 🔒 Honeypot (bots fill this, humans won’t)
  const [website, setWebsite] = useState('');

  // ⏱️ Timestamp (detect instant bot submission)
  const [startTime] = useState(Date.now());

  const handleSubscribe = async () => {
    if (!showInput) {
      setShowInput(true);
      return;
    }

    // validation
    if (!email) {
      setStatus('Please enter your email');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('Enter a valid email');
      return;
    }

    setLoading(true);
    setStatus('Submitting...');

    try {
      const res = await fetch('./purpose-api/newsletter.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          website, // honeypot
          time: Date.now() - startTime, // time spent
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('Subscribed successfully!');
        setEmail('');
        setShowInput(false);
      } else {
        setStatus(data.message || 'Failed to subscribe');
      }
    } catch {
      setStatus('Server error. Try again later.');
    }

    setLoading(false);
  };

  return (
    <section className="section__news">
      <div className="news__container container">
        <div className="news__content">
          {/* Hidden honeypot field */}
          <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} style={{ display: 'none' }} />

          {showInput && <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="news__input" />}

          {status && <p className="news__status">{status}</p>}

          <div className="news__buttons">
            <button className="btn subscribe-btn" onClick={handleSubscribe} disabled={loading}>
              {loading ? 'Submitting...' : showInput ? 'Submit' : 'Subscribe for Newsletter'}
            </button>

            <Link to="/joincommunity" className="btn community-btn">
              Join the Community
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
