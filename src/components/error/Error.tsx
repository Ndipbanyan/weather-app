import { GiTerror } from "react-icons/gi";

const ErrorOccurred = () => {
  return (
    <div
      data-testid="error"
      className="flex flex-col items-center justify-center text-3xl md:text-5xl text-yellow-600 "
    >
      <GiTerror />
      <p className="md:text-3xl text-xl">Ooops, there was an error</p>
    </div>
  );
};

export default ErrorOccurred;
