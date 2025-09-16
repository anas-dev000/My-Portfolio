import GradientTitle from "./GradientTitle";
import Paragraph from "./Paragraph";

const Card = ({
  title,
  children,
  gradientBg = "from-purple-900/50 to-slate-800/50",
}) => {
  return (
    <div
      className={`bg-gradient-to-r ${gradientBg} p-8 rounded-2xl backdrop-blur-sm border border-purple-500/20 hover:scale-105 transition-all duration-300`}
    >
      <GradientTitle as="h3" className="text-2xl mb-4" gradientWords={[]}>
        {title}
      </GradientTitle>
      <Paragraph className="text-gray-300 leading-relaxed mb-0">
        {children}
      </Paragraph>
    </div>
  );
};

export default Card;
