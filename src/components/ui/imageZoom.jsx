import { useRef } from "react";

const ImageZoom = ({ image }) => {
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = imageRef.current.getBoundingClientRect();
    // Percentage of cursor position horizontally
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    // Percentage of cursor position vertically
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    // Set transform-origin to follow cursor position
    imageRef.current.style.transformOrigin = `${x}% ${y}%`;
  };

  const handleMouseLeave = () => {
    // Reset transform-origin to center when mouse leaves
    imageRef.current.style.transformOrigin = "center center";
  };

  return (
    <div
      className="image-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img ref={imageRef} src={image} alt="Zoomable" />
    </div>
  );
};

export default ImageZoom;
