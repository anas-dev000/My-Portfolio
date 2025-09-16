const Button = ({
  children,
  href = "#",
  gradient = false,
  color = "purple-400",
  className = "",
}) => {
  /**
   * children: Button text
   * href: Button URL
   * gradient: true if you want a gradient button, false if it's solid/border
   * color: The primary color of the button or border
   * className: Any additional class
   */
  const baseClasses =
    "px-8 py-4 rounded-lg font-semibold transition-all duration-300";

  const gradientClasses = `bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 shadow-lg hover:shadow-xl`;
  const solidClasses = `border-2 border-${color} text-${color} hover:bg-${color} hover:text-white`;

  return (
    <a
      href={href}
      className={`${baseClasses} ${
        gradient ? gradientClasses : solidClasses
      } ${className}`}
    >
      {children}
    </a>
  );
};

export default Button;
