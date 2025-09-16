import GradientImage from "./GradientImage";
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
  return (
    <div
      className={`bg-gradient-to-br ${cardGradient} p-6 md:p-8 rounded-3xl backdrop-blur-sm border border-purple-500/20 hover:scale-105 hover:border-purple-400/40 transition-all duration-300 group flex flex-col h-full`}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4 md:mb-6">
        {icon && (
          <IconWrapper
            icon={icon}
            gradientFrom={iconGradientFrom}
            gradientTo={iconGradientTo}
          />
        )}

        <div>
          <GradientTitle
            as="h3"
            gradientWords={[]}
            defaultColor="white"
            className="text-2xl sm:text-xl md:text-2xl"
          >
            {title}
          </GradientTitle>

          {subtitle && (
            <Paragraph marginBottom="mb-0" className="text-purple-300">
              {subtitle}
            </Paragraph>
          )}
        </div>
      </div>

      {/* Image */}
      {imageSrc && (
        <GradientImage
          src={imageSrc}
          alt={imageAlt}
          shape={imageShape}
          className="mb-4 md:mb-6"
        />
      )}

      {/* Description */}
      {description && <Paragraph className="pt-3">{description}</Paragraph>}

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

      {showButton && buttonText && buttonHref && (
        <div className="mt-auto pt-4">
          <Button gradient href={buttonHref}>
            {buttonText}
          </Button>
        </div>
      )}
    </div>
  );
};

export default FlexibleCard;
