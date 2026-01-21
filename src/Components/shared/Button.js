const Button = ({
  onClick = () => {},
  children,
  href = "#",
  gradient = false,
  color = "purple-400",
  className = "",
  asButton = false, // New prop to render as button instead of anchor
}) => {
  /**
   * children: Button text
   * href: Button URL
   * gradient: true if you want a gradient button, false if it's solid/border
   * color: The primary color of the button or border
   * className: Any additional class
   * asButton: true if you want to render as <button> (e.g., when inside Link)
   */
  const baseClasses =
    "px-8 py-4 rounded-lg font-semibold transition-all duration-300";

  const gradientClasses = `bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 shadow-lg hover:shadow-xl`;
  const solidClasses = `border-2 border-${color} text-${color} hover:bg-${color} hover:text-white`;
  const isInternal = href.startsWith("#");

  const combinedClasses = `${baseClasses} ${
    gradient ? gradientClasses : solidClasses
  } ${className}`;

  // If asButton is true, render as <button> instead of <a>
  if (asButton) {
    return (
      <button
        type="button"
        className={combinedClasses}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  // Otherwise, render as <a>
  return (
    <a
      href={href}
      target={isInternal ? "_self" : "_blank"}
      rel={isInternal ? undefined : "noreferrer"}
      className={combinedClasses}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Button;
