import { images } from "../constants";

const SubHeading = ({ title, isCentered = false }) => {
  return (
    <div
      className={`mb-4 font-base text-2xl font-bold flex flex-col ${
        isCentered ? "items-center" : "items-start"
      }`}
    >
      <p className="mb-2">{title}</p>
      <img src={images.spoon} alt="spoon" className="w-12" />
    </div>
  );
};

export default SubHeading;
