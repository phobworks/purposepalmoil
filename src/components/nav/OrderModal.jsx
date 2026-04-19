import { useState } from 'react';
import './orderModal.css';

const products = ['1 Litre', '5 Litres', '10 Litres', '25 Litres', '50 Litres'];

const OrderModal = ({ onClose }) => {
  const [form, setForm] = useState({
    fullname: '',
    phone: '',
    email: '',
    address: '',
    lga: '',
    state: '',
    country: '',
    items: [],
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle product selection
  const handleItemChange = (product, qty) => {
    let updated = [...form.items];

    const index = updated.findIndex((item) => item.product === product);

    if (index > -1) {
      updated[index].qty = qty;
    } else {
      updated.push({ product, qty });
    }

    setForm({ ...form, items: updated });
  };

  const validate = () => {
    if (!form.fullname || !form.phone || !form.email || !form.address) {
      return 'Please fill all required fields';
    }

    if (form.items.length === 0) {
      return 'Select at least one product';
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

    setStatus('Sending...');

    try {
      const res = await fetch('https://purposepalmoil.com/purpose-api/order.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('Order placed successfully!');

        // ✅ RESET FORM
        setForm({
          fullname: '',
          phone: '',
          email: '',
          address: '',
          lga: '',
          state: '',
          country: '',
          items: [],
        });

        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        setStatus(data.message);
      }
    } catch {
      setStatus('Server error');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <h2>Place Your Order</h2>

        {status && <p className="status">{status}</p>}

        <form onSubmit={handleSubmit}>
          <input name="fullname" placeholder="Full Name" value={form.fullname} onChange={handleChange} />
          <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
          <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />

          <input name="address" placeholder="Address" value={form.address} onChange={handleChange} />
          <input name="lga" placeholder="LGA" value={form.lga} onChange={handleChange} />
          <input name="state" placeholder="State" value={form.state} onChange={handleChange} />

          <select name="country" value={form.country} onChange={handleChange}>
            <option value="">Select Country</option>
            <option>Nigeria</option>
            <option>Ghana</option>
          </select>

          <h4>Select Products</h4>

          {products.map((p) => (
            <div key={p} className="product-row">
              <span>{p}</span>
              <input type="number" min="0" placeholder="Qty" onChange={(e) => handleItemChange(p, e.target.value)} />
            </div>
          ))}

          <button type="submit">Submit Order</button>
        </form>
      </div>
    </div>
  );
};

export default OrderModal;
