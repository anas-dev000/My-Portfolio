import { useState } from "react";
import { motion } from "framer-motion";

import FlexibleCard from "../shared/FlexibleCard";
import GradientTitle from "../shared/GradientTitle";
import { projects } from "../../Data/projectsData";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-slate-900/50 to-purple-900/50">
      <div className="max-w-7xl mx-auto" id="projects">
        <GradientTitle
          gradientWords={["Projects"]}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          My Projects
        </GradientTitle>

        {/* Filter buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 pb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            { label: "All", value: "all" },
            { label: "Frontend", value: "frontend" },
            { label: "Backend", value: "backend" },
            { label: "Desktop", value: "desktop" },
          ].map((btn, i) => (
            <button
              key={i}
              onClick={() => setFilter(btn.value)}
              className={`
                px-5 py-2.5 rounded-full text-sm md:text-base font-medium 
                transition-all duration-300
                ${
                  filter === btn.value
                    ? "bg-gradient-to-r from-[#531e86] to-[#3fa8e8] text-white shadow-lg scale-105"
                    : "bg-white/10 text-white hover:bg-purple-500/20 hover:text-white"
                }
              `}
            >
              {btn.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.15 }}
            >
              <FlexibleCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
