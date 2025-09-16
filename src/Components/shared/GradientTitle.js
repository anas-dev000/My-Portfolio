const GradientTitle = ({
  children,
  gradientWords = [],
  defaultColor = "white",
  className = "",
  as: Component = "h1",
}) => {
  /**
   * children: The full title text
   * gradientWords: An array of words you want to gradient
   * defaultColor: The default color for regular words
   * className: Any additional class you want to add
   */

  /**
   *  gradientWords={["Anas", "Ali"]}
   *  defaultColor="white"
   *  className="text-4xl md:text-6xl leading-tight"
   */
  const words = children.split(" ");

  return (
    <Component className={`font-bold ${className}`}>
      {words.map((word, index) => {
        const isGradient = gradientWords.includes(word);
        return (
          <span
            key={index}
            className={
              isGradient
                ? "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                : `text-${defaultColor}`
            }
          >
            {word}{" "}
          </span>
        );
      })}
    </Component>
  );
};

export default GradientTitle;
