# Frontend Documentation for Recipe Search App

## Overview

This React Native application provides a simple recipe search functionality. Users can enter a predefined term (in this case, 'bread') in the search bar on the 'Browse' screen to receive bread recipes.

## Environment Setup

### Prerequisites

- Node.js (v18 or higher)
- npm
- Android SDK (for running the emulator)

### Installation Steps

1. **Clone the repository** and navigate to the project directory.
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Set up the Android emulator**:
   Ensure that the Android SDK is installed and properly configured.

### Configuration Options

- **Using Mock Data**:
  To use local mock data instead of connecting to MongoDB, create a `.env` file in the root of the project and add the following variables:

  ```plaintext
  MOCK_API=true
  API_URL=http://10.0.2.2:3000
  ```

  Set `MOCK_API` to `true` to use the mock data from the `apiMocks` folder. If you prefer to use MongoDB, set `MOCK_API` to `false`.

- **Connecting to MongoDB**:
  If you choose not to use mock data, ensure `MOCK_API` is set to `false` in your `.env` file and use the `API_URL` to configure the connection to your local MongoDB instance.

### Starting the Application

1. **Start the backend**: Follow the instructions provided [here](https://github.com/Jswears/recipes-app/tree/main/recipes-backend) to get the backend running.

2. **Start the React Native server**:
   ```bash
   npm run start
   ```
3. **Launch the Android emulator**:
   ```bash
   npm run android
   ```
   Note: Ensure the backend is running before starting the emulator to avoid errors fetching recipes.

## Dependency Management

- **Package Manager**: npm
- **Major External Libraries**:
  - `@react-navigation/native-stack` for navigation
  - `@rneui/base` and `@rneui/themed` for UI components

## Testing

### Running Tests

To run all tests:

```bash
npm test
```

To run a specific test:

```bash
npm test <test-name>
```

### Test Scenarios

- **RecipeCardComponent**:
  - Rendering tests
  - Full-width rendering test
- **RecipesApi**:
  - API success response test
  - Error handling tests
  - 404 error test
- **SearchBarComponent**:
  - Initial rendering and UI element tests
  - Input functionality tests (typing, clearing, handling special characters)
  - Accessibility and error handling tests

This documentation ensures that developers have the flexibility to either connect to a MongoDB backend or use local mock data for development and testing.
