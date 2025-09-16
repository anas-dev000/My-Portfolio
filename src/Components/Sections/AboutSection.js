import Card from "../shared/Card";
import CoreValuesCard from "../shared/CoreValuesCard";
import GradientTitle from "../shared/GradientTitle";

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
            <Card
              title="My Journey"
              gradientBg="from-slate-800/50 to-purple-900/50"
            >
              Recently graduated from Fayoum University (July 2024) with a
              passion for backend development. I specialize in building
              efficient and scalable systems using modern technologies like
              Node.js and Express.js.
            </Card>

            <Card
              title="What I Do"
              gradientBg="from-purple-900/50 to-slate-800/50"
            >
              I focus on creating RESTful APIs, database integration, and clean
              code practices. My experience includes delivering real-world
              solutions through freelance projects, from e-commerce platforms to
              management systems.
            </Card>
          </div>

          <CoreValuesCard />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
