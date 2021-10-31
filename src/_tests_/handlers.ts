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
            dt: 1635692400,
            main: {
              temp: 288.95,
              feels_like: 288.44,
              temp_min: 286.35,
              temp_max: 288.95,
              pressure: 1006,
              sea_level: 1006,
              grnd_level: 946,
              humidity: 71,
              temp_kf: 2.6,
            },
            weather: [
              {
                id: 802,
                main: "Clouds",
                description: "scattered clouds",
                icon: "03d",
              },
            ],
            clouds: {
              all: 34,
            },
            wind: {
              speed: 2.12,
              deg: 77,
              gust: 3.09,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "d",
            },
            dt_txt: "2021-10-31 15:00:00",
          },
          {
            dt: 1635703200,
            main: {
              temp: 286.92,
              feels_like: 286.31,
              temp_min: 282.86,
              temp_max: 286.92,
              pressure: 1006,
              sea_level: 1006,
              grnd_level: 946,
              humidity: 75,
              temp_kf: 4.06,
            },
            weather: [
              {
                id: 802,
                main: "Clouds",
                description: "scattered clouds",
                icon: "03n",
              },
            ],
            clouds: {
              all: 36,
            },
            wind: {
              speed: 2.09,
              deg: 169,
              gust: 2.33,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "n",
            },
            dt_txt: "2021-10-31 18:00:00",
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
