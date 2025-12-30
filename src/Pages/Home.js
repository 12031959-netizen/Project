// pages/Home.js
import Hero from '../Components/Hero';
import FeaturedMenu from '../Components/FeaturedMenu';
import Testimonials from '../Components/Testimonials';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <FeaturedMenu />
      <Testimonials />
    </div>
  );
};

export default Home;