import SubHeading from "../components/SubHeading";
import MenuItem from "../components/MenuItem";
import { images, data } from "../constants";

const SpecialMenu = () => {
  return (
    <section id="menu" className="bg-black min-h-screen px-8">
      <div className="relative flex flex-col items-center justify-center">
        <div className="text-white text-2xl text-center mt-8">
          <SubHeading title="Menu that fits you palatte" isCentered={true} />
          <h1 className="text-8xl xs:text-4xl font-base font-bold text-golden tracking-custom mb-8">
            Today’s Special
          </h1>
        </div>

        <div className="w-full flex flex-col items-start sm:items-center justify-center lg:flex-row my-8 mx-0">
          <div className="flex flex-1 flex-col max-w-[400px] w-full h-[596px] gap-10">
            <p className="text-center items-center font-base text-white text-4xl font-semibold tracking-custom">
              Wine & Beer
            </p>
            <div>
              {data.wines.map((wine, index) => (
                <MenuItem
                  key={wine.title + index}
                  title={wine.title}
                  price={wine.price}
                  tags={wine.tags}
                />
              ))}
            </div>
          </div>

          <div className="w-[410px] my-0 mx-8">
            <img src={images.menu} alt="menu img" />
          </div>

          <div className="flex flex-1 flex-col max-w-[400px] w-full h-[596px] gap-10">
            <p className="text-center items-center font-base text-white text-4xl font-semibold tracking-custom">
              Cocktails
            </p>
            <div>
              {data.cocktails.map((cocktail, index) => (
                <MenuItem
                  key={cocktail.title + index}
                  title={cocktail.title}
                  price={cocktail.price}
                  tags={cocktail.tags}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-[15px] justify-center items-center">
        <button className="bg-crimson font-base text-black text-base py-2 px-6 rounded-sm font-bold">
          View More
        </button>
      </div>
    </section>
  );
};

export default SpecialMenu;
