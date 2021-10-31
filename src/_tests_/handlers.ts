import { rest } from "msw";
const apiKey = process.env.REACT_APP_API_KEY || "";
export const handlers = [
  rest.get(
    "https://api.openweathermap.org/data/2.5/forecast ",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            id: 1635692400,
            day: "Sun, October 31'",
            Avg_temp: 301,
            description: "light rain",
            icon: "10d",
            hourlytemp: [303.33, 301.8, 300.3],
            hours: ["16:00 PM", "19:00 PM", "22:00 PM"],
          },
        ]),
        ctx.delay(150)
      );
    }
  ),
];

export const networkErrorHandlers = [
  rest.get(
    "https://api.openweathermap.org/data/2.5/forecast",
    (req, res, ctx) => res.networkError("Boom there was error")
  ),
];
