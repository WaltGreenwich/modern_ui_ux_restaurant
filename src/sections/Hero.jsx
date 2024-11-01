import { images } from "../constants";
import SubHeading from "../components/SubHeading";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-black min-h-screen lg:px-24 pt-24 pb-12 xs:px-4 xs:py-16"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 max-w-screen-xl">
        <div className="text-white text-2xl mt-1 md:mb-20 mx-4 ">
          <SubHeading title="Chase the new flavour" />
          <h1 className="text-8xl xs:text-4xl font-base font-bold text-golden tracking-custom mb-8">
            The Key To Fine Dining
          </h1>
          <p className="text-lg py-8">
            Discover a culinary experience where every flavor delights your
            senses. Our chefs use fresh ingredients and innovative techniques to
            craft dishes that celebrate excellence. Explore new flavors and let
            each bite transport you to fine dining perfection.
          </p>
          <button className="bg-crimson font-base text-black text-base py-2 px-6 rounded-sm leading-7 font-bold">
            Explore Menu
          </button>
        </div>
        <div className="flex justify-center mx-8">
          <img src={images.welcome} alt="welcome" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
