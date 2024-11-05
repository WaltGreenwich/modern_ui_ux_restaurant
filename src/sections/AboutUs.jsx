import { images } from "../constants";

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="bg-[url('src/assets/bg.png')] bg-cover bg-fixed min-h-screen relative flex items-center justify-center px-8 py-16 sm:px-16"
    >
      {/* Contenedor de la letra "G" en el fondo, centrada */}
      <div className="absolute inset-0 flex items-center justify-center opacity-50 z-0">
        <img src={images.G} alt="g letter" className="w-[391px] h-[415px]" />
      </div>

      {/* Contenedor principal con disposición en línea y z-index para estar sobre la "G" */}
      <div className="relative z-10 flex flex-col md:flex-row flex-1 items-center justify-center max-w-screen-xl">
        {/* Bloque de "About Us" */}
        <div className="flex flex-col text-end">
          <h1 className="text-5xl xs:text-4xl font-base font-bold text-golden tracking-custom">
            About Us
          </h1>
          <img src={images.spoon} alt="spoon" className="w-12 ml-auto my-4" />

          <p className="text-lg py-4 text-grey">
            At Gericht Restaurant, we blend passion with culinary expertise to
            offer a unique dining experience. Our team of skilled chefs crafts
            each dish with fresh ingredients, bringing flavors to life in every
            meal.
          </p>
          <button className="bg-crimson font-base text-black text-base py-2 px-6 rounded-sm leading-7 font-bold w-fit self-end">
            Know More
          </button>
        </div>

        {/* Imagen del cuchillo */}

        <div className="mx-16">
          <img
            src={images.knife}
            alt="knife"
            className="my-16 h-[910px] max-w-40"
          />
        </div>

        {/* Bloque de "Our History" */}
        <div className="flex flex-col text-start">
          <h1 className="text-5xl xs:text-4xl font-base font-bold text-golden tracking-custom">
            Our History
          </h1>
          <img src={images.spoon} alt="spoon" className="w-12 ml-0 my-4" />
          <p className="text-lg py-4 text-grey">
            Since our founding, Gericht Restaurant has been dedicated to
            excellence in cuisine and hospitality. With a passion for
            innovation, we strive to elevate the dining experience, blending
            traditional flavors with modern techniques.
          </p>
          <button className="bg-crimson font-base text-black text-base py-2 px-6 rounded-sm leading-7 font-bold w-fit">
            Know More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
