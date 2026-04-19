import './products.css';
import ProductsBanner from './ProductsBanner';
import ProductVarient from './ProductVarient';
import Footer from '../../components/footer/Footer';
import Testimonials from '../../components/Testimonials';

const Products = () => {
  return (
    <>
      <ProductsBanner />
      <ProductVarient />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Products;
