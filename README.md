# Auth App

This project is a React-based authentication application bootstrapped with Create React App.

## Features

- User Sign Up
- User Sign In
- Protected Routes
- Profile Viewing
- Logout Functionality

## Technologies Used

- React
- TypeScript
- Material-UI
- Formik & Yup for form handling and validation
- Axios for API requests
- React Router for navigation
- Sentry for error logging

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Set up environment variables:
   Create a `.env.development` file in the root directory and add the following:
   ```
   REACT_APP_API_BASE_URL=http://localhost:3000
   PORT=4000
   REACT_APP_SENTRY_DSN=your_sentry_dsn
   REACT_APP_REWIRED=true
   ```

4. Start the development server:
   ```
   npm run start:dev
   ```

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in development mode
- `npm run start:dev`: Runs the app using the development environment variables
- `npm run start:prod`: Runs the app using the production environment variables
- `npm run build`: Builds the app for production
- `npm run build:dev`: Builds the app using development environment variables
- `npm run build:prod`: Builds the app using production environment variables 
- `npm run lint:fix`: Lints and fixes issues in the codebase
- `npm run format`: Formats the codebase using Prettier

## Folder Structure

- `src/`: Contains the source code
  - `api/`: API-related functions
  - `components/`: React components
  - `context/`: React context providers
  - `styles/`: Shared styles and theme
  - `utils/`: Utility functions
- `public/`: Public assets 

## Learn More

To learn more about the technologies used in this project, check
- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)
- [TypeScript documentation](https://www.typescriptlang.org/docs/)
