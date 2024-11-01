import SubHeading from "../components/SubHeading";
import MenuItem from "../components/MenuItem";
import { images, data } from "../constants";

const SpecialMenu = () => {
  return (
    <section id="menu" className="bg-red-400 min-h-screen">
      <div className="relative flex flex-col items-center justify-center">
        <div className="text-white text-2xl text-center mt-8">
          <SubHeading title="Menu that fits you palatte" isCentered={true} />
          <h1 className="text-8xl xs:text-4xl font-base font-bold text-golden tracking-custom mb-8">
            Today’s Special
          </h1>
        </div>

        <div className="w-full flex flex-col items-start justify-center md:flex-row my-8 mx-0">
          <div className="">
            <p>Wine & Beer</p>
            <div>
              {data.wines.map((wine, index) => (
                <MenuItem
                  key={wine.title + index}
                  title={wine.price}
                  price={wine.price}
                  tags={wine.tags}
                />
              ))}
            </div>
          </div>

          <div>
            <img src={images.menu} alt="menu img" />
          </div>

          <div className="">
            <p>Cocktails</p>
            <div>
              {data.cocktails.map((cocktail, index) => (
                <MenuItem
                  key={cocktail.title + index}
                  title={cocktail.price}
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
