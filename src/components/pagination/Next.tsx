import { FaArrowAltCircleRight } from "react-icons/fa";
interface Prop {
  onClick: () => void;
}
const Next = ({ onClick }: Prop) => {
  return (
    <button className="ml-6 text-red-900 text-5xl" onClick={onClick}>
      <FaArrowAltCircleRight />
    </button>
  );
};

export default Next;
