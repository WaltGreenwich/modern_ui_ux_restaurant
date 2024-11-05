import { images } from "../constants";
import SubHeading from "../components/SubHeading";

const Chef = () => {
  return (
    <section className="bg-[url('src/assets/bg.png')] bg-cover bg-fixed min-h-screen py-16 lg:px-16 xs:px-8 flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center md:space-x-8 max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto px-6 md:px-8">
        <div className="w-full lg:w-1/2 flex  justify-center xs:items-center md:justify-end mb-8 md:mb-8 xs:mx-8 lg:mr-24">
          <img
            src={images.chef}
            alt="chef"
            className="w-[80%] xs:w-[100%] max-w-xs md:max-w-full mx-auto"
          />
        </div>

        <div className="w-full lg:w-1/2 text-white text-lg md:text-2xl space-y-4 xs:mt-16 mx-auto">
          <SubHeading title="Chef’s Word" isCentered={false} />
          <h1 className="lg:text-5xl capitalize font-base font-bold text-golden tracking-custom xs:text-4xl mb-8">
            What we believe in
          </h1>

          <div className="space-y-4 items-start">
            <div className="relative my-16 max-w-xl leading-relaxed text-lg text-white">
              <img
                src={images.quote}
                alt="quote"
                className="float-left w-10 h-10 mr-3 mt-1"
              />
              <p>
                At Gericht, every dish tells a story. Led by our chef’s passion
                for perfection, we combine fresh ingredients to honor tradition
                and innovation. For us, cooking is an art that connects and
                elevates moments. Savor the essence of excellence with us.
              </p>
            </div>

            <div className="mt-6">
              <p className="text-golden font-bold text-3xl font-base">
                Kevin Luo
              </p>
              <p className="text-gray-400 text-base">Chef & Founder</p>
            </div>
            <img src={images.sign} alt="signature" className="w-64 pt-8" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chef;
