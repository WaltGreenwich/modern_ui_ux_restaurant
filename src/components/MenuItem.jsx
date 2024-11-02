import { TiThLargeOutline } from "react-icons/ti";

const MenuItem = ({ title, price, tags }) => {
  return (
    <div className="w-full mx-0 flex flex-col my-8">
      <div className="flex justify-between items-center">
        <div className=" mt-1 flex-1">
          <p className="font-base text-golden text-2xl font-bold whitespace-nowrap">
            {title}
          </p>
        </div>
        <div className="dash flex-1 mx-4 w-[90px] h-[1px] bg-golden" />
        <div className="flex justify-end items-end">
          <p className="text-white font-base font-bold text-2xl">{price}</p>
        </div>
      </div>
      <div>
        <p className="text-grey text-base font-normal">{tags}</p>
      </div>
    </div>
  );
};

export default MenuItem;
