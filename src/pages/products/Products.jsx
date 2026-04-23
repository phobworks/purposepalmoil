import './products.css';
import ProductsBanner from './ProductsBanner';
import ProductVarient from './ProductVarient';
import Footer from '../../components/footer/Footer';
import Testimonials from '../../components/Testimonials';
import NewsLetter from './NewsLetter';

const Products = () => {
  return (
    <>
      <ProductsBanner />
      <ProductVarient />
      <Testimonials />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Products;
