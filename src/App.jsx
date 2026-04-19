import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Products from './pages/products/Products';
// import Services from './pages/services/Services';
import Contact from './pages/contact/Contact';
import NotFound from './pages/notfound/NotFound';

import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import WhatsAppButton from './components/WhatsAppButton';
import { ModalProvider } from './components/ModalContext';

function App() {
  // const [showModal, setShowModal] = useState(false);
  return (
    <ModalProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          {/* <Route path="/services" element={<Services />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
        <BackToTop />
        <WhatsAppButton />
      </BrowserRouter>
      {/* {showModal && <OrderModal onClose={() => setShowModal(false)} />} */}
    </ModalProvider>
  );
}

export default App;
