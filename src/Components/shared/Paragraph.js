const Paragraph = ({
  children,
  className = "",
  marginBottom = "mb-12"
}) => {
  return (
    <p className={`text-lg md:text-xl text-gray-400 ${marginBottom} max-w-2xl mx-auto leading-relaxed ${className}`}>
      {children}
    </p>
  );
};

export default Paragraph;
