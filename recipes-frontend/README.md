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
  API_URL=http://10.0.2.2:<local_backend_port>
  MOCK_API=true
  ```

  Set `MOCK_API` to `true` to use the mock data from the `apiMocks` folder. If you prefer to use MongoDB, set `MOCK_API` to `false`.

- **Connecting to MongoDB**:
  If you choose not to use mock data, ensure `MOCK_API` is set to `false` in your `.env` file and use the `API_URL` to configure the connection to your local MongoDB instance.

- **Connecting to MongoDB if Using Android Emulator**:
  If you are using an Android emulator to run the application, you will need to update the `API_URL` in the `.env` file to point to `

  ```plaintext

  API_URL=http://API_URL=http://10.0.2.2:<local_backend_port>

  ```

- **Connecting to MongoDB if using Device**:
  If you are using a physical device to run the application, you will need to update the `API_URL_DEVICE` in the `.env` file to point to your local IP address. For example:

  ```plaintext
  API_URL_DEVICE=http://192.x.x.x:<local_backend_port>
  ```

  You can find your local IP address by running `ipconfig` on Windows or `ifconfig` on macOS/Linux. Use the IPv4 address.
  You also should remove or comment out the `API_URL` variable.

- **If fetching fails it uses mockData**:
  If the application fails to fetch data from the backend, it will automatically switch to using the mock data.

- **Default local backend port**:
  The default local backend port is `3000`.
- **Running on iOS**:
  To run the application on iOS, use the following command:

  ```bash
  npm run ios
  ```

  Note: Ensure you have Xcode installed on your machine.

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
  - `axios` for API requests
  - `react-native-dotenv` for environment variables
  - `font-awesome` for icons

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
