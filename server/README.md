# Backend Server Setup

This is the backend server for the Varshil Portfolio website, handling contact form submissions with MongoDB.

## Prerequisites

- Node.js (v18 or higher)
- MongoDB Atlas account or local MongoDB installation

## Installation

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the server directory:
```bash
cp .env.example .env
```

4. Update the `.env` file with your MongoDB connection string:
```
MONGODB_URI=your_mongodb_connection_string_here
PORT=5000
```

## Getting MongoDB Connection String

### Option 1: MongoDB Atlas (Cloud)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user
4. Whitelist your IP address (or use 0.0.0.0/0 for development)
5. Click "Connect" and copy the connection string
6. Replace `<password>` and `<dbname>` in the connection string

### Option 2: Local MongoDB
If you have MongoDB installed locally:
```
MONGODB_URI=mongodb://localhost:27017/portfolio
```

## Running the Server

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will run on `http://localhost:5000` (or the PORT specified in your .env file).

## API Endpoints

### Health Check
- **GET** `/api/health`
- Returns server status

### Submit Contact Form
- **POST** `/api/contact`
- Body: `{ name, email, subject, message }`
- Returns: Success message and saved contact data

### Get All Contacts (Optional)
- **GET** `/api/contacts`
- Returns: Array of all contact submissions

## Frontend Configuration

Make sure your frontend `.env` file includes:
```
VITE_API_URL=http://localhost:5000
```

For production, update this to your deployed backend URL.

### CORS configuration
Set `ALLOWED_ORIGINS` in `server/.env` (comma separated) so the serverless API will accept requests from your deployed frontend:
```
ALLOWED_ORIGINS=https://client-portfolio-42ry.vercel.app,https://client-portfolio.vercel.app
```

