import GradientTitle from "../shared/GradientTitle";
import GradientImage from "../shared/GradientImage";
import Paragraph from "../shared/Paragraph";
import Button from "../shared/Button";
import { Link } from "react-router-dom";

const HeroComponent = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative flex flex-col items-center justify-center bg-black text-white px-4 overflow-hidden xl:pt-12"
    >
      {/* Background Gradient Pulse */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-purple-600/20  pointer-events-none"></div>

      <div className="animate-fade-in space-y-6 flex flex-col items-center">
        {/* Profile Image */}
        <GradientImage
          className="z-50"
          src={
            "https://res.cloudinary.com/dbgthgcgh/image/upload/v1758025408/myImageFormal_nesewd.jpg"
          }
        />

        {/* Name */}
        <GradientTitle
          gradientWords={["Anas", "Ali", "Elgebaly"]}
          className="text-4xl sm:text-5xl md:text-6xl leading-tight"
        >
          Anas Ali Elgebaly
        </GradientTitle>

        {/* Subtitle */}
        <GradientTitle
          as="h2"
          gradientWords={[]}
          defaultColor="white"
          className="text-xl sm:text-2xl md:text-3xl leading-snug animate-typing inline-block overflow-hidden whitespace-nowrap mt-2"
        >
          Software Engineer
        </GradientTitle>

        {/* About Me Paragraph */}
        <Paragraph className="text-center max-w-md mx-auto">
          Creating responsive and scalable web applications using the MEARN
          stack. Focused on writing clean code and delivering impactful,
          real-world solutions.
        </Paragraph>

        {/* Buttons */}
        <div className="flex flex-row justify-center items-center gap-3">
          <Link to={"/projects"}>
            <Button
              gradient
              className="px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base"
            >
              View My Work
            </Button>
          </Link>
          <Link to={"/contact"}>
            <Button
              color="purple-400"
              className="px-4 py-2 text-[1rem] sm:px-6 sm:py-3 sm:text-base"
            >
              Get In Touch
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
