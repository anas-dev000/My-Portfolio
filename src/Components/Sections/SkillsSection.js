import { FaServer, FaCode, FaDatabase, FaTools } from "react-icons/fa";
import FlexibleCard from "../shared/FlexibleCard";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Technical{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FlexibleCard
            title="Languages"
            icon={FaCode}
            skills={["JavaScript (ES6+)", "TypeScript", "Python", "C#"]}
            cardGradient="from-slate-800/50 to-blue-900/50"
            showButton={false}
          />

          <FlexibleCard
            title="Frameworks"
            icon={FaServer}
            skills={["Node.js", "Express.js", "React"]}
            cardGradient="from-purple-900/50 to-slate-800/50"
          />

          <FlexibleCard
            title="Databases"
            icon={FaDatabase}
            skills={["MongoDB", "MySQL", "SQLite"]}
            cardGradient="from-green-900/50 to-slate-800/50"
          />

          <FlexibleCard
            title="Tools"
            icon={FaTools}
            skills={["JWT & OAuth2", "Stripe", "Postman", "Git & GitHub"]}
            cardGradient="from-orange-900/50 to-slate-800/50"
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
