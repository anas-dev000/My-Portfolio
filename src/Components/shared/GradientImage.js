const GradientImage = ({
  src,
  alt = "image",
  shape = "circle",
  className = "",
}) => {
  const shapeClass =
    shape === "circle"
      ? "rounded-full w-44 h-44 sm:w-48 sm:h-48 lg:w-60 lg:h-60"
      : "rounded-2xl w-full h-48 sm:h-56 md:h-64 lg:h-72";

  return (
    <div
      className={`overflow-hidden shadow-3xl bg-gradient-to-tr from-blue-400 to-purple-400 ${shapeClass} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${
          shape === "circle" ? "rounded-full" : "rounded-2xl"
        }`}
      />
    </div>
  );
};

export default GradientImage;
