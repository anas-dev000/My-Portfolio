import IconWrapper from "./IconWrapper";

const ContactCard = ({
  icon,
  title,
  subtitle,
  href,
  gradientFrom = "blue-600",
  gradientTo = "purple-600",
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-gradient-to-r from-${gradientFrom} to-${gradientTo} p-6 rounded-2xl hover:scale-105 transition-all duration-300 group flex flex-col items-center`}
    >
      <IconWrapper
        icon={icon}
        gradientFrom={gradientFrom}
        gradientTo={gradientTo}
        className="mb-4"
      />
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-200">{subtitle}</p>
    </a>
  );
};

export default ContactCard;
