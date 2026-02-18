import GradientTitle from "../shared/GradientTitle";
import GradientImage from "../shared/GradientImage";
import Paragraph from "../shared/Paragraph";
import Button from "../shared/Button";
import { Link } from "react-router-dom";

const HeroComponent = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center -mt-6 md:-mt-16 overflow-x-hidden"
    >

      <div className="animate-fade-in space-y-4 md:space-y-6 flex flex-col items-center w-full px-2">
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
          className="text-3xl sm:text-5xl md:text-6xl leading-tight text-center"
        >
          Anas Ali Elgebaly
        </GradientTitle>

        {/* Subtitle */}
        <div className="min-h-[2rem] flex justify-center w-full">
          <GradientTitle
            as="h2"
            gradientWords={[]}
            defaultColor="white"
            className="text-lg sm:text-2xl md:text-3xl leading-snug animate-typing inline-block overflow-hidden whitespace-nowrap mt-1"
          >
            Software Engineer
          </GradientTitle>
        </div>

        {/* About Me Paragraph */}
        <Paragraph className="text-center max-w-md mx-auto text-sm sm:text-base opacity-90">
          Creating responsive and scalable web applications using the MEARN
          stack. Focused on writing clean code and delivering impactful,
          real-world solutions.
        </Paragraph>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 w-full max-w-[280px] sm:max-w-none">
          <Link to={"/projects"} className="w-full sm:w-auto">
            <Button
              asButton={true}
              gradient
              className="w-full sm:w-auto px-4 py-3 text-sm sm:px-6 sm:py-3 sm:text-base"
            >
              View My Work
            </Button>
          </Link>
          <Button
            href="https://drive.google.com/file/d/1J1pY6NsHqxyEPrG622je3rF8b7dep8TC/view?usp=drive_link"
            color="purple-400"
            className="w-full sm:w-auto px-4 py-3 text-sm sm:px-6 sm:py-3 sm:text-base"
          >
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
