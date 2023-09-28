import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import Button from "../Button";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY > 350) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const buttonStyle = {
    position: "fixed",
    bottom: "20px",
    right: "5%",
    transform: "translateX(-50%)",
    display: isVisible ? "block" : "none",
    zIndex: 100
  };

  return (
    <div style={buttonStyle}>
      {isVisible && (
        <Button className="top-btn" onClick={goToBtn} text="" icon={<FaArrowUp className="top-btn--icon" />} />
      )}
    </div>
  );
};

export default GoToTop;
