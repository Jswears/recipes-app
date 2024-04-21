Here's a README template for the main folder of your monorepo, `recipes-app`, which includes both the `recipes-backend` and `recipes-frontend` subdirectories. This README will provide an overview of the entire application, linking to the detailed documentation for each part of the project.

---

# Recipe Search App

## Overview

The Recipe Search App is a full-stack application designed to provide a simple and interactive way to search and view recipes. This monorepo contains both the frontend and backend components of the application. The frontend is built with React Native, offering a mobile interface, while the backend is a RESTful API powered by Node.js and MongoDB.

## Structure

The repository is structured into two main folders:

- **recipes-frontend**: Contains all the code related to the React Native application.
- **recipes-backend**: Houses the Node.js server and API logic.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- npm
- MongoDB
- Android SDK (for running the emulator, if testing the frontend)

### Clone the Repository

To get started with the Recipe Search App, clone this repository to your local machine:

```bash
git clone https://github.com/Jswears/recipes-app.git
cd recipes-app
```

### Installation

Navigate to each directory to install dependencies and set up the environment:

```bash
# Install backend dependencies
cd recipes-backend
npm install

# Install frontend dependencies
cd ../recipes-frontend
npm install
```

## Running the Application

### Backend

Ensure MongoDB is running locally on `localhost:27017`. Start the backend server by navigating to the `recipes-backend` directory and running:

```bash
npm run start:dev  # For development
# or
npm run start     # For production
```

For detailed backend setup and API documentation, see [Backend README](recipes-backend/README.md).

### Frontend

Before starting the frontend, make sure the backend server is running. Navigate to the `recipes-frontend` directory and execute:

```bash
npm run start       # Starts the React Native server
npm run android     # Launches the Android emulator
```

For detailed frontend setup and operation, refer to [Frontend README](recipes-frontend/README.md).

## Testing

### Backend Testing

Navigate to the `recipes-backend` directory:

```bash
npm run test:e2e  # Runs end-to-end tests
```

### Frontend Testing

Navigate to the `recipes-frontend` directory:

```bash
npm test           # Runs all frontend tests
```

## Documentation

For more details on how each part of the application is designed, how to interact with the API, and how to extend the functionality, refer to the README files in each subdirectory:

- [Backend Documentation](recipes-backend/README.md)
- [Frontend Documentation](recipes-frontend/README.md)

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues to discuss proposed changes or enhancements.

---

This README provides a central guide for setting up and running the entire application, with links to detailed documentation for both the backend and frontend parts of the project. Adjust paths and URLs as necessary based on your actual repository structure and URLs.
