import AboutSection from "../components/About/AboutSection";
import Carousel from "../components/Carousel/Carousel";
import ChefSection from "../components/Chef/ChefSection";
import GallerySection from "../components/Gallery/GallerySection";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <Carousel />
      <GallerySection />
      <AboutSection />
      <ChefSection />
    </div>
  );
};

export default Home;
