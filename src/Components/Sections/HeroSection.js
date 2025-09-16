import GradientTitle from "../shared/GradientTitle";
import GradientImage from "../shared/GradientImage";
import Paragraph from "../shared/Paragraph";
import Button from "../shared/Button";
const HeroComponent = () => {
  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center bg-black text-white px-4 overflow-hidden">
      {/* Background Gradient Pulse */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-purple-600/20 animate-pulse pointer-events-none"></div>

      <div className="animate-fade-in space-y-6 flex flex-col items-center">
        {/* Profile Image */}
        <GradientImage
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
          className="text-xl sm:text-2xl md:text-3xl p-2 leading-snug animate-typing inline-block overflow-hidden whitespace-nowrap"
        >
          Software Engineer
        </GradientTitle>

        {/* About Me Paragraph */}
        <Paragraph>
          Creating responsive and scalable web applications using the MEARN
          stack. Focused on writing clean code and delivering impactful,
          real-world solutions.
        </Paragraph>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button gradient href="#projects">
            View My Work
          </Button>
          <Button color="purple-400" href="#contact">
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
