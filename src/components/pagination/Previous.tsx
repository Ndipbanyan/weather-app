import { FaArrowAltCircleLeft } from "react-icons/fa";

const Previous = (props: any) => {
  const { style, onClick } = props;
  return (
    <button
      className="absolute text-red-900 top-20 left-0 text-2xl md:text-5xl z-10 align-middle"
      style={{ ...style, display: `${onClick == null ? "none" : "block"}` }}
      onClick={onClick}
    >
      <FaArrowAltCircleLeft />
    </button>
  );
};

export default Previous;
