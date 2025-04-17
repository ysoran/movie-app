```markdown
# Movie SPA

A simple Single Page Application (SPA) built with React and TypeScript to search, list, and view detailed information about movies using the [OMDb API](http://www.omdbapi.com/).

## Features

- Search movies by title (default: "Pokemon")
- Filter results by release year and type (movie, series, episode)
- View movies in a table format (Title, Release Date, IMDb ID)
- Pagination: 10 movies per page
- Detailed movie information on a separate page
- Responsive UI styled with SCSS

---

## Tech Stack

- React (with TypeScript)
- React Router
- Axios
- SCSS for styling
- Material UI (MUI) for UI components
- Redux for state management

---

## Getting Started

### Prerequisites

- Node.js (>= 14)
- npm (>= 6)

### Installation

1. Clone the repo:
```bash
https://github.com/ysoran/movie-spa.git
```

2. Navigate to the project folder:
```bash
cd movie-spa
```

3. Install dependencies:
```bash
npm install
```

4. Create a `.env` file in the root directory and add your OMDb API key:
```env
REACT_APP_OMDB_API_KEY=your_api_key_here
```

5. Start the development server:
```bash
npm start
```

6. Open the app in your browser:
```
http://localhost:3000
```

---

## Running Playwright Tests

To ensure the application is working as expected, we have written end-to-end tests using **Playwright**.

### Prerequisites for Testing

- Node.js (>= 14)
- npm (>= 6)

### Installing Playwright

1. Install Playwright and related dependencies:
```bash
npm install -D @playwright/test
```

2. Install the required browsers (Chromium, Firefox, and WebKit):
```bash
npx playwright install
```

### Running the Tests

You can run the Playwright tests with the following command:

- To run the tests in headless mode:
```bash
npm run test:e2e
```

- To run the tests with the Playwright Test UI:
```bash
npm run test:e2e:ui
```

The tests will automatically launch the browser and run the end-to-end tests.

---

### Test Commands in `package.json`

Here are the scripts for running Playwright tests:

```json
"scripts": {
  "test:e2e": "playwright test",
  "test:e2e:ui": "playwright test --ui"
}
```

- `test:e2e`: Runs Playwright tests in headless mode.
- `test:e2e:ui`: Runs Playwright tests with an interactive UI for better debugging.

---

## Build for Production

To build the app for production:

```bash
npm run build
```

This will create a `build` folder with optimized production-ready files.

---

## Project Structure

```
src/
├── app/
│   ├── store.ts
├── assets/
│   ├── mixins.scss
│   ├── variables.scss
├── components/
│   ├── FilterInputs.tsx
│   ├── MovieRow.tsx
│   ├── SkeletonRow.tsx
│   ├── MovieTable.tsx
├── features/movies/
│   ├── movieSlice.ts
├── pages/
│   ├── Home.tsx
│   ├── Home.scss
│   ├── MovieDetail.tsx
│   └── MovieDetail.scss
├── types/
│   └── Types.ts
├── App.tsx
├── index.tsx
├── index.css
├── tests/e2e
│   └── home.spec.ts
├── README.md
└── playwright.config.ts
```
---

## Notes

- For bonus points, the app uses SCSS instead of plain CSS.
- Redux is used for state management, making it easier to scale the app.
- A backend proxy is recommended to avoid OMDb CORS issues (not included in this repo).
- End-to-end tests are written using Playwright to ensure the app works as expected.

---

## License

MIT
```

---
