import { useState } from "react";
import Paragraph from "./Paragraph";
import GradientTitle from "./GradientTitle";
import Button from "./Button";
import IconWrapper from "./IconWrapper";

const FlexibleCard = ({
  title,
  description,
  skills,
  icon,
  iconGradientFrom = "blue-600",
  iconGradientTo = "purple-600",
  subtitle,
  imageSrc,
  imageAlt,
  imageShape = "rounded",
  buttonText = "View Project",
  buttonHref = "#projects",
  showButton = false,
  cardGradient = "from-slate-800/80 to-purple-900/40",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Truncate description to first 150 characters for consistency
  const truncatedDescription = description?.length > 150 
    ? description.substring(0, 150) + "..." 
    : description;

  return (
    <div
      className={`bg-gradient-to-br ${cardGradient} p-6 md:p-8 rounded-3xl backdrop-blur-sm border border-purple-500/20 hover:scale-105 hover:border-purple-400/40 transition-all duration-300 group flex flex-col h-full`}
    >
      {/* Header - Fixed height section */}
      <div className="flex items-center gap-3 mb-4 md:mb-6 min-h-[80px]">
        {icon && (
          <IconWrapper
            icon={icon}
            gradientFrom={iconGradientFrom}
            gradientTo={iconGradientTo}
          />
        )}

        <div className="flex-1">
          <GradientTitle
            as="h3"
            gradientWords={[]}
            defaultColor="white"
            className="text-2xl sm:text-xl md:text-2xl"
          >
            {title}
          </GradientTitle>

          {subtitle && (
            <Paragraph marginBottom="mb-0" className="text-purple-300 text-sm">
              {subtitle}
            </Paragraph>
          )}
        </div>
      </div>

      {/* Image - Fixed height */}
      {imageSrc && (
        <div className="mb-4 md:mb-6 h-64 overflow-hidden rounded-xl">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      )}

      {/* Description area - Flexible height */}
      <div className="flex-grow flex flex-col">
        {description && (
          <div className="flex-grow">
            <Paragraph className="pt-3">
              {isExpanded ? description : truncatedDescription}
            </Paragraph>
          </div>
        )}

        {/* Skills */}
        {skills && skills.length > 0 && (
          <div className="space-y-2 mt-3">
            {skills.map((skill, i) => (
              <p key={i} className="text-gray-300">
                {skill}
              </p>
            ))}
          </div>
        )}

        {/* Read More button - Always at bottom of description area */}
        {description && description.length > 150 && (
          <div className="mt-3">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-200"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>
        )}
      </div>

      {/* View Project button - Always at card bottom */}
      {showButton && buttonText && buttonHref && (
        <div className="mt-6 pt-4 border-t border-purple-500/20">
          <Button gradient href={buttonHref}>
            {buttonText}
          </Button>
        </div>
      )}
    </div>
  );
};

export default FlexibleCard;
