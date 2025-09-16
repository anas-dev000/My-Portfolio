import CoreValueItem from "./CoreValueItem";
import GradientTitle from "./GradientTitle";

const CoreValuesCard = () => {
  return (
    <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 rounded-3xl backdrop-blur-sm border border-purple-500/20 transform rotate-3 hover:rotate-0 transition-all duration-500">
      <div className="bg-slate-800/50 p-6 rounded-2xl">
        <GradientTitle as="h3" className="text-xl mb-4" gradientWords={[]}>
          Core Values
        </GradientTitle>
        <ul className="space-y-3">
          <CoreValueItem color="#A78BFA">
            Clean, maintainable code
          </CoreValueItem>
          <CoreValueItem color="#60A5FA">Continuous learning</CoreValueItem>
          <CoreValueItem color="#A78BFA">Scalable solutions</CoreValueItem>
          <CoreValueItem color="#60A5FA">Real-world impact</CoreValueItem>
        </ul>
      </div>
    </div>
  );
};

export default CoreValuesCard;
