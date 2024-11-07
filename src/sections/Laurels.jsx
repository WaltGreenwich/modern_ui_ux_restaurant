import SubHeading from "../components/SubHeading";
import { images, data } from "../constants";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="p-4 text-start">
    {" "}
    {/* Contenedor general con padding */}
    <div className="flex items-start justify-start mb-2 w-full">
      {" "}
      <img src={imgUrl} alt="award" className="w-[50px] h-[50px] mr-3" />
      <div className="items-start">
        <p className="text-golden font-semibold text-3xl font-base">{title}</p>{" "}
        {/* Título a la derecha de la imagen */}
        <p className="text-white text-sm mt-2">{subtitle}</p>{" "}
      </div>
    </div>
  </div>
);

const Laurels = () => {
  return (
    <section
      id="awards"
      className="bg-[url('src/assets/bg.png')] bg-cover bg-fixed min-h-screen py-16 lg:px-16 xs:px-8 flex items-center justify-center"
    >
      <div className="flex lg:flex-row xs:flex-col max-w-7xl w-full px-6 justify-between items-center space-y-8 lg:space-y-0">
        <div className="flex flex-col items-center lg:items-start lg:w-1/2">
          <div className="text-white mb-8">
            <SubHeading title="Awards & recognition" />
            <h1 className="font-base font-bold text-golden tracking-custom md:text-5xl xs:text-4xl">
              Our Laurels
            </h1>
          </div>
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-8">
            {" "}
            {data.awards.map((award) => (
              <AwardCard award={award} key={award.title} />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center lg:w-1/2">
          <img
            src={images.laurels}
            alt="laurels"
            className="w-full h-auto max-w-xs lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Laurels;
