import './testimonial.css';

import { useState, useEffect, useRef } from 'react';
import { testimonials } from '../data';

const Testimonials = () => {
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [startIndex, setStartIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const startX = useRef(0);
  const isDragging = useRef(false);

  const total = testimonials.length;

  const handleNext = () => {
    if (startIndex + itemsPerPage < total) {
      setStartIndex((prev) => prev + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - itemsPerPage);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setItemsPerPage(1);
      } else if (window.innerWidth <= 1024) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setStartIndex(0);
  }, [itemsPerPage]);

  // 👉 Auto-scroll
  //   useEffect(() => {
  //     if (isHovered) return;

  //     const interval = setInterval(() => {
  //       setStartIndex((prev) => {
  //         if (prev + itemsPerPage >= total) return 0;
  //         return prev + itemsPerPage;
  //       });
  //     }, 4000);

  //     return () => clearInterval(interval);
  //   }, [isHovered, total]);

  // 👉 Swipe Handlers
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchEnd = (e) => {
    if (!isDragging.current) return;

    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;

    if (diff > 50) handleNext(); // swipe left
    if (diff < -50) handlePrev(); // swipe right

    isDragging.current = false;
  };

  // 👉 Mouse drag (desktop swipe feel)
  const handleMouseDown = (e) => {
    startX.current = e.clientX;
    isDragging.current = true;
  };

  const handleMouseUp = (e) => {
    if (!isDragging.current) return;

    const diff = startX.current - e.clientX;

    if (diff > 50) handleNext();
    if (diff < -50) handlePrev();

    isDragging.current = false;
  };

  const visibleTestimonials = testimonials.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(total / itemsPerPage);
  const currentPage = Math.floor(startIndex / itemsPerPage);

  return (
    <section className="test__section">
      <div className="cust__container container">
        <div className="cust-stories__small">
          <span></span>
          <small>Customer Stories</small>
        </div>
        <div className="cust__contents">
          <div className="cust__content">
            <h2>Households and businesses trust Purpose Palm Oil</h2>
          </div>
          <div className="cust__content">
            <p>Real customers share how our refined, purpose-built variants have improved their cooking and consistency in the kitchen.</p>
          </div>
        </div>
      </div>
      <div className="test__container container" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        {/* Gradient edges */}
        <div className="fade-left" />
        <div className="fade-right" />

        {/* Cards */}
        <div className="test__content" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
          {visibleTestimonials.map((item, index) => {
            const isCenter = index === Math.floor(itemsPerPage / 2); // middle of 3

            return (
              <div className={`text__cards ${isCenter ? 'active-card' : 'side-card'}`} key={item.id}>
                <p>{item.custest}</p>
                <small>{item.cusname}</small>
              </div>
            );
          })}
        </div>

        {/* Arrows */}
        <div className="pagination">
          <button onClick={handlePrev} disabled={startIndex === 0}>
            ←
          </button>
          <button onClick={handleNext} disabled={startIndex + itemsPerPage >= total}>
            →
          </button>
        </div>

        {/* Dots */}
        <div className="dots">
          {Array.from({ length: totalPages }).map((_, index) => (
            <span key={index} className={`dot ${index === currentPage ? 'active' : ''}`} onClick={() => setStartIndex(index * itemsPerPage)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
