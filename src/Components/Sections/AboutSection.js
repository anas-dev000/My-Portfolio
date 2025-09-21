import { motion } from "framer-motion";
import Card from "../shared/Card";
import CoreValuesCard from "../shared/CoreValuesCard";
import GradientTitle from "../shared/GradientTitle";
import aboutData from "../../Data/aboutData";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <GradientTitle
          className="text-4xl md:text-5xl text-center mb-16"
          gradientWords={["Me"]}
        >
          About Me
        </GradientTitle>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {/* Journey Card */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card
                title={aboutData.journey.title}
                gradientBg={aboutData.journey.gradientBg}
              >
                {aboutData.journey.content}
              </Card>
            </motion.div>

            {/* What I Do Card */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card
                title={aboutData.whatIDo.title}
                gradientBg={aboutData.whatIDo.gradientBg}
              >
                <ul className="list-disc list-inside space-y-2 text-gray-200">
                  {aboutData.whatIDo.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>

          {/* Core Values with Animation */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <CoreValuesCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
