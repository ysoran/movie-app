# Movie SPA

A simple Single Page Application (SPA) built with React and TypeScript to search, list, and view detailed information about movies using the [OMDb API](http://www.omdbapi.com/).

https://github.com/user-attachments/assets/6093149d-e074-42dd-ab70-9c6f08ec8da5

---

## ✨ Features

- 🔍 Search movies by title (default: "Pokemon")
- 🎯 Filter results by release year and type (movie, series, episode)
- 📋 View movies in a table format (Title, Release Date, IMDb ID)
- 📄 Pagination: 10 movies per page
- 🧾 Detailed movie information on a separate page
- 📱 Responsive UI styled with SCSS

---

## 🧰 Tech Stack

- React + TypeScript
- React Router
- Redux Toolkit
- Axios
- SCSS for styling
- Material UI (MUI) for components
- Playwright for E2E testing

---

## 🚀 Getting Started

### Prerequisites

- Node.js (>= 14)
- npm (>= 6)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ysoran/movie-app.git
```

2. Navigate to the project folder:

```bash
cd movie-app
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

6. Open your browser and go to:

```
http://localhost:3000
```

---

## ✅ Running Playwright Tests

End-to-end tests are written using **Playwright**.

### Playwright Setup

1. Install Playwright and required browsers:

```bash
npm install -D @playwright/test
npx playwright install
```

### Running Tests

- Run in headless mode:

```bash
npm run test:e2e
```

- Run with interactive UI:

```bash
npm run test:e2e:ui
```

### `package.json` Test Scripts

```json
"scripts": {
  "test:e2e": "playwright test",
  "test:e2e:ui": "playwright test --ui"
}
```

---

## 🚰 Build for Production

To create an optimized build:

```bash
npm run build
```

The production build will be in the `build/` directory.

---

## 📁 Project Structure

```
src/
├── app/
│   └── store.ts
├── assets/
│   ├── mixins.scss
│   └── variables.scss
├── components/
│   ├── FilterInputs.tsx
│   ├── MovieRow.tsx
│   ├── SkeletonRow.tsx
│   └── MovieTable.tsx
├── features/movies/
│   └── movieSlice.ts
├── pages/
│   ├── Home.tsx
│   ├── Home.scss
│   ├── MovieDetail.tsx
│   └── MovieDetail.scss
├── types/
│   └── Types.ts
├── tests/e2e/
│   └── home.spec.ts
├── App.tsx
├── index.tsx
├── index.css
├── playwright.config.ts
└── README.md
```

---

## 📌 Notes

- Uses **SCSS** for flexible styling.
- **Redux Toolkit** manages global state.
- End-to-end testing is done with **Playwright**.

---

## 📄 License

MIT

