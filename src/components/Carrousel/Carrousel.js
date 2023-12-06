import { useState } from "react";
import left from "../../image/Left.png";
import right from "../../image/Right.png";

function Carrousel({ slide }) {
  const [currentPicture, setCurrentPicture] = useState(0);
  const slideLength = slide.length;

  const nextSlide = () => {
    setCurrentPicture((currentPicture) => (currentPicture + 1) % slideLength);
  };

  const previousSlide = () => {
    setCurrentPicture((currentPicture) => (currentPicture - 1 + slideLength) % slideLength);
  };

  const renderArrows = () => {
    if (slideLength === 1) {
      return null;
    }

    return (
      <>
        <img className="arrow arrowLeft" src={left} alt="Left" onClick={previousSlide} />
        <img className="arrow arrowRight" src={right} alt="Right" onClick={nextSlide} />
        <span className="tracking-slide">
          {currentPicture + 1}/{slideLength}
        </span>
      </>
    );
  };

  return (
    <>
      <div className="carrouselContainer">
        {renderArrows()}
        <img className="carrouselSlide" src={slide[currentPicture]} alt={`Slide ${currentPicture}`} />
      </div>
    </>
  );
}

export default Carrousel;
