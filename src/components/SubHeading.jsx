import { images } from "../constants";

const SubHeading = ({ title }) => {
  return (
    <div className="mb-4 font-base text-2xl font-bold">
      <p className="mb-4">{title}</p>
      <img src={images.spoon} alt="spoon" />
    </div>
  );
};

export default SubHeading;
