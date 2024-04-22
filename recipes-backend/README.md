# Backend Documentation for Recipe Search App

## Overview

The backend serves as a RESTful API, primarily handling `GET /recipes` requests from the MongoDB database to fetch and return recipe data to the frontend.

## Environment Setup

### Prerequisites

- Node.js (v18 or higher)
- MongoDB
- npm

### Installation Steps

1. **Clone the repository** and navigate to the backend directory:
   ```bash
   git clone https://github.com/Jswears/recipes-app.git
   cd recipes-app/recipes-backend
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```

## Running with Docker

For those who prefer to use Docker for managing applications, you can easily run the backend along with MongoDB using Docker Compose. This setup allows you to run your application in a containerized environment with minimal configuration.

### Docker Prerequisites

Before you start, make sure you have Docker and Docker Compose installed on your system. For installation instructions, visit [Docker's official documentation](https://docs.docker.com/get-docker/).

Install Docker Compose separately if it's not included in your Docker installation. You can find instructions for installing Docker Compose [here](https://docs.docker.com/compose/migrate/).

### Configuration

You need to set up a few environment variables in the Docker Compose file to connect to MongoDB properly. You may also need to add credentials if your MongoDB setup requires authentication:

```yaml
version: '3.8'
services:
  app:
    container_name: backend
    build:
      context: ./
      dockerfile: Dockerfile
    environment:
      DATABASE_NAME: recipes
      DATABASE_URI: mongodb://database:27017
      DATABASE_USER: # YOUR_DATABASE_USER (Optional, uncomment if required)
      DATABASE_PASS: # YOUR_DATABASE_PASS (Optional, uncomment if required)
    ports:
      - '4000:4000' # Expose the application port
    depends_on:
      - database

  database:
    image: mongo:latest
    container_name: mongodb
    restart: always
    ports:
      - '27017:27017'
```

### Running the Application with Docker

After configuring the Docker Compose file, you can start the application by running:

```bash
docker-compose up # To run in the foreground
or
docker-compose up -d # To run in detached mode
```

This command builds the Docker image for the backend if it hasn't been built yet, starts the MongoDB container, and runs the backend application linking to the MongoDB service. The application will seed mock data if the database is empty.

### Accessing the Application

The application will be accessible at `http://localhost:4000` by default. You can send requests to the API using this base URL.

### Stopping the Application

To stop and remove the containers, use:

```bash
docker-compose down
```

This ensures that all services are properly shut down and any network configurations are cleaned up.

## Running the Application

1. **Set up the environment**:

   - Create a `.env` file in the root of the project.
   - Add the following variables to the `.env` file:

     ```plaintext
     PORT=<port>
     DATABASE_NAME=<database_name>
     DATABASE_URI=mongodb://localhost:27017/${DATABASE_NAME} #This is an example URI, replace with your own
     ```

     - `PORT`: The port on which the server will run.
     - `DATABASE_NAME`: The name of the MongoDB database.
     - `DATABASE_URI`: The connection string for the MongoDB database.

2. **Start the server**:
   - For development:
     ```bash
     npm run start:dev
     ```
   - For production:
     ```bash
     npm run start
     ```

## Database Setup

### MongoDB Connection

Ensure MongoDB is running on the default port `27017` or update this port in your `.env` file as needed.

### Database Schema

The `Recipe` schema is defined using NestJS Mongoose decorators:

```typescript
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Recipe {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  servings: number;

  @Prop({ required: true })
  imageUrl: string;

  @Prop({ required: true })
  ingredients: string[];

  @Prop({ required: true })
  preparation: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}
```

## Testing

**Important Note**

Database Connection: The tests require an active connection to MongoDB, as they perform data retrieval and manipulation which are critical to validating the application's functionality.

### Configuration

Testing is set up using Jest and Supertest for end-to-end testing of the API.

### Running Tests

Execute the tests with the following command, to run the tests the backend must be running:

```bash
npm run test:e2e
```

### Test Examples

- \*\*GET /recipes

\*\*: This test verifies that the `/recipes` endpoint returns an array of recipes and checks the structure of the returned data.

- **Error Handling**: Tests the API's ability to handle errors gracefully and return appropriate error messages.

---
