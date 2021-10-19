import { BiLoaderCircle } from "react-icons/bi";

const Loading = () => {
  return (
    <div className="animate-spin h-5 w-5 mr-3 text-5xl text-yellow-600">
      <BiLoaderCircle />
    </div>
  );
};

export default Loading;
