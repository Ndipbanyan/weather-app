import { FaArrowAltCircleRight } from "react-icons/fa";

const Next = (props: any) => {
  const { style, onClick } = props;
  return (
    <button
      className="absolute -top-3   right-6 text-red-900 text-2xl md:text-5xl z-10"
      style={{ ...style }}
      onClick={onClick}
    >
      <FaArrowAltCircleRight />
    </button>
  );
};

export default Next;
