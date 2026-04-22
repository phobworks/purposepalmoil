import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '2348106861310'; // replace with your number
  const message = "Hello, I'm interested in your palm oil";

  return (
    <a href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`} className="whatsapp__float" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;
