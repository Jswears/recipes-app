# Backend Documentation for Recipe Search App

## Overview

The backend serves as a RESTful API, primarily handling `getRecipes` requests from the MongoDB database to fetch and return recipes data to the frontend.

## Environment Setup

### Prerequisites

- Node.js (v18 or higher)
- MongoDB
- npm

### Installation Steps

1. **Clone the repository** and navigate to the backend directory.
2. **Install dependencies**:
   ```bash
   npm install
   ```

## Running the Application

1. **Local MongoDB Instance**:
   Ensure MongoDB is running locally on `localhost:27017`.
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

- The application connects to a local MongoDB instance. Ensure MongoDB is running on the default port `27017`.

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

Execute the tests with the following command:

```bash
npm run test:e2e
```

### Test Examples

- **GET /recipes**: This test verifies that the `/recipes` endpoint returns an array of recipes and checks the structure of the returned data.
- **Error Handling**: Tests the API's ability to handle errors gracefully and return appropriate error messages.
