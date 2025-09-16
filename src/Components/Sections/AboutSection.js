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
              I began my journey as a computer science student passionate about
              solving real-world problems. Through projects like Akhtarly –
              Hardware Recommendation System and the ITI MERN Stack scholarship,
              I gained hands-on experience with backend engineering, database
              design, and modern JavaScript practices. Along the way, I built
              diverse projects—from responsive frontends with React and Angular
              to scalable APIs with Node.js and MongoDB. Today, I’m a Full Stack
              MERN developer, focused on writing clean, secure, and maintainable
              code that delivers real impact.
            </Card>

            <Card
              title="What I Do"
              gradientBg="from-purple-900/50 to-slate-800/50"
            >
              <ul className="list-disc list-inside space-y-2 text-gray-200">
                <li>
                  Build secure & scalable APIs with Node.js, Express, and
                  MongoDB/PostgreSQL.
                </li>
                <li>
                  Develop responsive UIs with React & Angular, supporting RTL
                  and accessibility.
                </li>
                <li>
                  Design and optimize databases for performance and scalability.
                </li>
                <li>
                  Apply clean architecture & TDD for maintainable, testable
                  systems.
                </li>
                <li>
                  Deliver end-to-end solutions from e-commerce APIs to desktop
                  and educational platforms.
                </li>
              </ul>
            </Card>
          </div>

          <CoreValuesCard />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
