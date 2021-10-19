import { FaArrowAltCircleLeft } from "react-icons/fa";
interface Prop {
  onClick: () => void;
}
const Previous = ({ onClick }: Prop) => {
  return (
    <button className="mr-6 text-red-900 text-5xl" onClick={onClick}>
      <FaArrowAltCircleLeft />
    </button>
  );
};

export default Previous;
