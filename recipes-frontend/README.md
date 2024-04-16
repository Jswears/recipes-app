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
