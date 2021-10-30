import { rest } from "msw";

import { setupServer } from "msw/node";
import {
  render,
  screen,
  waitForElementToBeRemoved,
  waitFor,
} from "././utilities/test-utils";
import App from "./App";
const apiKey = process.env.REACT_APP_API_KEY || "";
const server = setupServer(
  rest.get(
    "https://api.openweathermap.org/data/2.5/forecast",
    (req, res, ctx) => {
      const query = req.url.searchParams;
      const q = query.get("lagos");
      const appid = query.get(apiKey);
      return res(ctx.status(200));
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
describe("App", () => {
  test("should render error component if Api call fails", async () => {
    server.use(
      rest.get(
        "https://api.openweathermap.org/data/2.5/forecast",
        (req, res, ctx) => {
          const query = req.url.searchParams;
          const q = query.get("lagos");
          const appid = query.get(apiKey);
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
          const query = req.url.searchParams;
          const q = query.get("lagos");
          const appid = query.get(apiKey);
          return res(ctx.status(201));
        }
      )
    );
    render(<App />);

    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });
});
