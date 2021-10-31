import { fireEvent, render, screen } from "../utilities/test-utils";
import TemperatureScale from "../components/temp-scale/TemperatureScale";

test("should render the temperature component ", async () => {
  render(<TemperatureScale />);

  fireEvent.click(screen.getByRole("button"));

  expect(screen.getByText("Celsius")).toBeInTheDocument();
  expect(screen.getByText("Fahrenheit")).toBeInTheDocument();
  expect(screen.getByText("Refresh")).toBeInTheDocument();
});
