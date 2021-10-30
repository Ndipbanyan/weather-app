import { BiLoaderCircle } from "react-icons/bi";

const Loading = () => {
  return (
    <div
      data-testid="loading"
      className=" animate-spin  flex flex-col items-center justify-center text-5xl text-yellow-600 "
    >
      <BiLoaderCircle />
    </div>
  );
};

export default Loading;
