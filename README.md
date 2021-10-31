# Sky Up Weather!

## Description

This is a weather app that shows weather information for a total five days/40 3-hour periods for Lagos, Nigeria. This implementation has been made to cover the basic task requirements and a few nice to haves. <br>
The following would be good areas for improvement with less constraints on time or if this were to become an acutal production-ready application:

- Geolocation: A user should be able see weather information for their current location by default.
- City-selection functionality: A user should be able to search for and view weather information for a particular city.
- Temperature segments on the bar chart are shown in the user's local time. It would also be nice to be able to view in the local time of the selected city.
- Responsiveness: Current implementation is only responsive for desktop and mobile views and doesn't account for tablet or any screen sizes in between.
- More thorough unit and integration tests.

## Technologies/Tools

- UI: React
- Language: TypeScript
- State management: Redux Toolkit
- Styling: Tailwind CSS
- Testing: React testing library
- Deployment: Github Actions & Pages
  <br>
  _Tailwind was used over Material UI because of it's flexibility, customizability and relative ease to implement responsiveness (and also some personal preference)._

## Scripts

Run development server

```bash
$ yarn start
```

Build

```bash
$ yarn build
```

Test

```bash
$ yarn test
```

Deployment

```bash
$ yarn deploy
```

## [Live Link](https://Ndipbanyan.github.io/weather-app)

## Preview

<img width="1440" alt="Screenshot 2021-10-31 at 15 45 57" src="https://user-images.githubusercontent.com/67186679/139589123-78967706-7e61-4846-a624-bdb7e73d6ff5.png">


