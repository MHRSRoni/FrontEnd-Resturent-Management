const Hero = () => {
  return (
    <div className="container mx-auto">
      <div className="hero ">
        <div className="hero-content text-center">
          <div className="max-w-lg mt-20">
            <h2 className="text-4xl sm:text-6xl font-bold">
              Where every <span className="text-secondary">flavor</span>
            </h2>
            <h2 className="text-4xl sm:text-6xl font-bold">
              tells a <span className="text-secondary">story</span>
            </h2>
            <p className=" text-black mt-6 font-medium cursor-pointer">
              Popular Items
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
