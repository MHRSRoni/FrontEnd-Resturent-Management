import restaurant from "../../assets/image/resturant.jpg";
const AboutSection = () => {
  return (
    <div className="bg-neutral">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-3 md:gap-8 justify-center items-center w-10/12 mx-auto">
          <div className="w-full md:w-2/4 ">
            <img
              src={restaurant}
              alt="restaurant photo"
              className="rounded-lg w-full h-auto object-cover "
            />
          </div>
          <div className="w-full md:w-2/4  ">
            <div className="flex flex-col justify-between  h-full py-2">
              <h4 className="text-black font-medium text-2xl">About Us</h4>
              <p className="pt-5">
                Lörem ipsum icke-binär beska autonat av vöhet, terabel.
                Prelalyde jenade ett etnocentrism. Hälsolitteracitet cisperson.
                Oss gigiment realara myhet. Nok lan. Tav kvasir att lade
                reprening. Biligen anade kens ade i metaism. Mar talig
                becknarväska huruvida teraras, prer. Trilylingar. Pseudokroskap
                intralig. Ultragäsm fixie i slöjböter. Askänka beska pevis i
                bysk.
              </p>
              <p className="pt-5">
                teraras, prer. Trilylingar. Pseudokroskap intrali
              </p>
              <button className="btn btn-sm text-white btn-secondary w-40 mt-4">
                More about Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
