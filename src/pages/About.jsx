
import restaurantImage from '../assets/image/tabletop-looking-out-empty-restaurant.jpg'; // Import your restaurant image
import dishImage from '../assets/image/tabletop-looking-out-empty-restaurant.jpg'; // Import a dish image
import chefImage from '../assets/image/tabletop-looking-out-empty-restaurant.jpg'; // Import a chef image

import video from "../assets/video/pexels-luis-quintero-5742150 (540p).mp4"

const founderName = "John Doe";

const About = () => {

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="w-full md:flex">
        <div className="md:w-1/2 p-4">
          <img src={restaurantImage} alt="Restaurant Interior" className="w-full h-auto rounded-lg mb-4" />
        </div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 text-lg mb-4">
            Kachchi Palace was born out of a passion for preserving and celebrating the time-honored recipes and techniques that have been passed down through generations. Our founder, {founderName}, grew up immersed in the flavors and aromas of traditional Kachchi cooking, learning the secrets of the kitchen from their grandmother.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            In 20XX, {founderName} decided to bring these cherished family recipes to the world, creating a place where everyone can experience the magic of Kachchi flavors. Thus, Kachchi Palace was established, with the goal of sharing the culinary heritage of the Kachchi community with a broader audience.
          </p>
        </div>
      </div>

      <div className="w-full md:flex">
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-700 text-lg mb-4">
            At Kachchi Palace, our vision is simple yet powerful: to provide an authentic and unforgettable Kachchi dining experience to all our guests. We believe that great food brings people together, and we are committed to fostering a sense of community and belonging through the delicious dishes we serve.
          </p>
          <h2 className="text-2xl font-semibold mb-4">What Sets Us Apart</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg mb-4">
            <li>Authenticity: Our commitment to authenticity means we use only the finest ingredients and traditional cooking methods to recreate the true essence of Kachchi cuisine.</li>
            <li>Cultural Heritage: We take pride in our roots, and our restaurant is a reflection of the rich Kachchi culture. From the decor to the music, every detail has been carefully chosen to transport you to the heart of Kachch.</li>
            <li>Hospitality: Our team is dedicated to providing you with exceptional service, ensuring that your dining experience is not just a meal but a memorable journey.</li>
          </ul>
        </div>
        <div className="md:w-1/2 p-4">
          <img src={dishImage} alt="Delicious Dish" className="w-full h-auto rounded-lg mb-4" />
        </div>
      </div>

      <div className="w-full md:flex">
        <div className="md:w-1/2 p-4">
          <video autoPlay loop muted playsInline className="w-full h-auto rounded-lg">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-semibold mb-4">Our Menu</h2>
          <p className="text-gray-700 text-lg mb-4">
            Discover a diverse and delectable menu featuring Kachchi classics and contemporary twists that cater to every palate. Whether you are a fan of our succulent kebabs, fragrant biryanis, or vegetarian delights, we have something for everyone.
          </p>
        </div>
      </div>

      <div className="w-full md:flex">
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-semibold mb-4">Visit Us</h2>
          <img src={chefImage} alt="Chef in the Kitchen" className="w-full h-auto rounded-lg mb-4" />
        </div>
        <div className="md:w-1/2 p-4">
          <p className="text-gray-700 text-lg mb-4">
            We invite you to visit Kachchi Palace, where we blend tradition and innovation to offer you an unforgettable dining experience. Join us in celebrating the vibrant flavors of Kachchi cuisine and creating lasting memories with friends and family.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            Download our app and explore our menu, reserve a table, or place an order for delivery to savor the flavors of Kachchi Palace wherever you are.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            Thank you for considering Kachchi Palace for your culinary journey. We look forward to serving you and becoming a part of your food story.
          </p>
        </div>
      </div>
    </div>
  );
  
};

export default About;
