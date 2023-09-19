import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className=" bg-neutral">
      <footer className="footer p-10  container mx-auto">
        <div className="w-full h-full flex items-center">
          <p>
            Kachchi <span className="text-secondary">Palace</span>
          </p>
        </div>
        <nav>
          <header className="footer-title text-black">Follow Us</header>
          <a className="link link-hover flex">
            {" "}
            <span className="text-blue-600 text-xl mr-3">
              <BsFacebook />
            </span>{" "}
            Facebook
          </a>
          <a className="link link-hover flex">
            {" "}
            <span className="text-blue-600 text-xl mr-3">
              <AiFillInstagram />
            </span>{" "}
            Instagram
          </a>
          <a className="link link-hover flex">
            {" "}
            <span className="text-blue-600 text-xl mr-3">
              <BsTwitter />
            </span>{" "}
            Twitter
          </a>
        </nav>
        <nav>
          <header className="footer-title">Contact Us</header>
          <a className="link link-hover" href="mailto:someone@example.com">
            abc@gmail.com
          </a>
          <a className="link link-hover" href="tel:+8801925252525">
            {" "}
            +8801925252525
          </a>
        </nav>
        <nav>
          <header className="footer-title">Open Hours</header>
          <p>
            The Restaurant opening hours <br /> are 9 a.m. to 6 p.m
          </p>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
