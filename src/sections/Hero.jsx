import { images } from "../constants";
import SubHeading from "../components/SubHeading";

const Hero = () => {
  return (
    <section
      id="home"
      className="max-w-full bg-black min-h-screen py-16 px-8 pb-16"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 max-w-screen-xl w-full">
        <div className="text-white mt-1 md:mb-20">
          <SubHeading title="Chase the new flavour" />
          <h1 className="xs:text-4xl md:text-8xl font-base font-bold text-golden tracking-custom mb-8">
            The Key To Fine Dining
          </h1>
          <p className="md:text-lg xs:text-md py-8">
            Discover a culinary experience where every flavor delights your
            senses. Our chefs use fresh ingredients and innovative techniques to
            craft dishes that celebrate excellence. Explore new flavors and let
            each bite transport you to fine dining perfection.
          </p>
          <button className="bg-crimson font-base text-black text-base py-2 px-6 rounded-sm leading-7 font-bold">
            Explore Menu
          </button>
        </div>
        <div className="flex justify-center w-full">
          <img
            src={images.welcome}
            alt="welcome"
            className="w-full max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
