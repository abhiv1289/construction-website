import Person from "../assets/person.jpg"
import LearnMoreButton from "./LearnMoreButton";
const HeroSection = () => {
  return (
    <>
    <div className="relative w-full h-[500px] pt-5 pr-5 pl-5">

      {/* Background Image */}
      <img
        src={Person}
        alt="hero"
        className="w-full h-full object-cover"
      />

      {/* BLUE CARD (right) */}
      <div className="absolute right-0 bottom-5 w-[40%] bg-[#6bb7c4] text-white mr-5 p-6 z-10">
        <p className="text-sm leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>

        <button className="mt-4 flex items-center gap-2 text-sm font-medium">
          Learn More →
        </button>
      </div>

    </div>
  
  
    </>
  );
};

export default HeroSection;