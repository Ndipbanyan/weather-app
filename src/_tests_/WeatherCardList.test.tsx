import WeatherCardList from "../components/weather-card-list/WeatherCardList";
import { render, screen } from "../utilities/test-utils";

test("should render the weatherCard component ", async () => {
  render(<WeatherCardList />);

  expect(screen.queryByTestId("card")).toBeInTheDocument();

  expect(await screen.queryByTestId("card")).toBeInTheDocument();
});
