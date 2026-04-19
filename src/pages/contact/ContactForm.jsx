import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const captchaRef = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const { fullname, email, message } = formData;

    if (!fullname || !email || !message) {
      return 'All fields are required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Invalid email address';
    }

    if (!captchaValue) {
      return 'Please verify captcha';
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      setIsError(true);
      setStatus(error);
      return;
    }

    setLoading(true);
    setStatus('Sending...');
    setIsError(false);

    try {
      const response = await fetch('https://purposepalmoil.com/purpose-api/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          captcha: captchaValue,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsError(false);
        setStatus('Message sent successfully!');

        // ✅ FULL RESET
        setFormData({
          fullname: '',
          email: '',
          message: '',
        });
        setCaptchaValue(null);

        captchaRef.current.reset();
      } else {
        setIsError(true);
        setStatus(data.message || 'Something went wrong');
      }
    } catch (err) {
      setIsError(true);
      setStatus('Server error. Try again later.');
    }

    setLoading(false);
  };

  return (
    <div className="contact-container2">
      <form onSubmit={handleSubmit} className="contact-form">
        <h2>Contact Us</h2>

        {/* Status Message */}
        {status && <p className={isError ? 'status error' : 'status success'}>{status}</p>}

        <input type="text" name="fullname" placeholder="Full Name" value={formData.fullname} onChange={handleChange} />

        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />

        <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} />

        <ReCAPTCHA ref={captchaRef} sitekey="6Lfnbb0sAAAAAC-y6lVB8pEZxMJjVPWbtaR8DFt4" onChange={(value) => setCaptchaValue(value)} />

        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
