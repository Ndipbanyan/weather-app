import { GiTerror } from "react-icons/gi";

const ErrorOccured = () => {
  return (
    <div className="flex flex-col items-center justify-center text-5xl text-yellow-600 ">
      <GiTerror />
      <p className="text-3xl">Ooops, there was an error</p>
    </div>
  );
};

export default ErrorOccured;
