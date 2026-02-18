import IconWrapper from "./IconWrapper";

const ContactCard = ({
  icon,
  title,
  subtitle,
  href,
  gradientFrom = "from-blue-600",
  gradientTo = "to-purple-600",
  border = "",
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} 
        p-4 md:p-6 rounded-2xl md:rounded-3xl 
        hover:scale-[1.02] md:hover:scale-105 transition-all duration-300 group 
        flex flex-row md:flex-col items-center md:items-center gap-4 md:gap-2
        ${border ? `border-2 ${border}` : "border border-white/5"}`}
    >
      <div className="flex-shrink-0">
        <IconWrapper
          icon={icon}
          gradientFrom={gradientFrom}
          gradientTo={gradientTo}
          className="p-2 md:p-3"
        />
      </div>
      <div className="flex flex-col items-start md:items-center text-left md:text-center">
        <h3 className="text-lg md:text-xl font-bold text-white leading-tight">{title}</h3>
        <p className="text-xs md:text-sm text-white/80 font-medium">{subtitle}</p>
      </div>
    </a>
  );
};

export default ContactCard;

            // {
            //   icon: FaEnvelope,
            //   title: "Send Email",
            //   subtitle: "anas.dev000@gmail.com",
            //   href: "https://mail.google.com/mail/?view=cm&fs=1&to=anas.dev000@gmail.com",
            //   gradientFrom: "blue-600",
            //   gradientTo: "purple-600",
            // },
            // {
            //   icon: FaWhatsapp,
            //   title: "WhatsApp",
            //   subtitle: "+201050850441",
            //   href: "https://wa.me/201050850441",
            //   gradientFrom: "green-600",
            //   gradientTo: "teal-600",
            // },