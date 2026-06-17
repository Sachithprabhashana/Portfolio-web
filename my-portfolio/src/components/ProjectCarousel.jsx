import { useState, useEffect } from "react";

const ProjectCarousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [fade, setFade] = useState(true); // Tracks the smooth fade state

  // Helper function to handle fading out before switching images
  const triggerSlideChange = (nextIndex) => {
    setFade(false); // Drop opacity to 0
    setTimeout(() => {
      setCurrentIndex(nextIndex); // Swap image source behind the curtain
      setFade(true); // Fade opacity back to 1
    }, 200); // Matches the CSS transition speed exactly
  };

  // Handle auto-sliding logic
  useEffect(() => {
    if (!images || images.length <= 1 || isHovered) return;

    const interval = setInterval(() => {
      triggerSlideChange((currentIndex + 1) % images.length);
    }, 3500); // 3.5 seconds gives a great breathing room with the animation time

    return () => clearInterval(interval);
  }, [images, isHovered, currentIndex]);

  if (!images || images.length === 0) {
    return (
      <div className="carousel-container placeholder">
        <span style={{ color: "#64748b", fontSize: "0.9rem" }}>
          No screenshots provided
        </span>
      </div>
    );
  }

  const prevSlide = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const targetIndex =
      currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    triggerSlideChange(targetIndex);
  };

  const nextSlide = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const targetIndex =
      currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    triggerSlideChange(targetIndex);
  };

  return (
    <div
      className="carousel-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Display Active Image with dynamic class hooks */}
      <img
        src={images[currentIndex]}
        alt={`${title || "Project"} screenshot ${currentIndex + 1}`}
        className={`carousel-image ${fade ? "fade-in" : "fade-out"}`}
      />

      {images.length > 1 && (
        <>
          <button
            type="button"
            className="carousel-btn prev"
            onClick={prevSlide}
          >
            &#10094;
          </button>
          <button
            type="button"
            className="carousel-btn next"
            onClick={nextSlide}
          >
            &#10095;
          </button>

          <div className="carousel-dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (index !== currentIndex) triggerSlideChange(index);
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectCarousel;
