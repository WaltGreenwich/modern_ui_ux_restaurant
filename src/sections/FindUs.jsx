import SubHeading from "../components/SubHeading";
import { images, data } from "../constants";

const FindUs = () => {
  return (
    <section
      id="contact-us"
      className="bg-[url('src/assets/bg.png')] bg-cover bg-fixed min-h-screen py-16 lg:px-16 xs:px-8 flex items-center justify-center"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 max-w-screen-xl">
        <div className="text-white mt-8 md:mb-20 mx-4 lg:w-1/2">
          <SubHeading title="Contact" />
          <h1 className="xs:text-4xl md:text-5xl font-base font-bold text-golden tracking-custom mb-8">
            Find Us
          </h1>
          <p className="text-lg py-8">
            Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
          </p>
          <p className="font-base font-bold tracking-custom text-2xl text-golden mb-8">
            Opening Hours
          </p>
          <p className="text-white font-alt text-lg mb-2">
            Mon - Fri: 10:00 am - 02:00 am
          </p>
          <p className="text-white font-alt text-lg mb-8">
            Sat - Sun: 10:00 am - 03:00 am
          </p>
          <button className="bg-crimson font-base text-black text-base py-2 px-6 rounded-sm leading-7 font-bold">
            Visit Us
          </button>
        </div>

        <div className="flex justify-center mx-8 lg:w-1/2">
          <img
            src={images.findus}
            alt="findus"
            className="lg:w-[80%] xs:w-[100%] max-w-xs md:max-w-full mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default FindUs;
