import { setupServer } from "msw/node";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "../utilities/test-utils";

import App from "../App";
import { handlers } from "./handlers";
import axios from "axios";
import { rest } from "msw";

const server = setupServer(...handlers);

beforeAll(() => server.listen({ onUnhandledRequest: "bypass" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
describe("App", () => {
  test("should render error component if Api call fails", async () => {
    server.use(
      rest.get(
        "https://api.openweathermap.org/data/2.5/forecast",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    render(<App />);

    await waitForElementToBeRemoved(() => screen.getByTestId("loading"));

    expect(screen.getByTestId("error")).toBeInTheDocument();
  });

  test("should render the loading component if Api call is pending", async () => {
    server.use(
      rest.get(
        "https://api.openweathermap.org/data/2.5/forecast",
        (req, res, ctx) => {
          return res(ctx.status(202));
        }
      )
    );
    render(<App />);

    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });

  test("should render the App", async () => {
    const getSpy = jest.spyOn(axios, "get");

    render(<App />);
    expect(getSpy).toBeCalledTimes(1);
    expect(await screen.getByTestId("weather-app")).toBeInTheDocument();
  });
});
