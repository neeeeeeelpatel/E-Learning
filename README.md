# Learning Platform

An online learning platform similar to Udemy, built with Next.js, Node.js, and MongoDB.

## Features

- User authentication with role-based access (Admin, Instructor, Learner)
- Course creation and management
- Video uploads and streaming
- Exercise and assignment system
- Payment integration with Razorpay
- Certificate generation

## Tech Stack

- Frontend: Next.js + Tailwind CSS
- Backend: Node.js + Express
- Database: MongoDB
- Storage: Local/S3 (for videos)
- Payments: Razorpay
- PDF Generation: jsPDF/html2pdf

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Setup Instructions

1. Clone the repository:

```bash
git clone <repository-url>
cd learning-platform
```

2. Set up the backend:

```bash
cd backend
npm install
```

3. Create a `.env` file in the backend directory with the following variables:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/learning-platform
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

4. Set up the frontend:

```bash
cd ../frontend
npm install
```

5. Start the development servers:

In the backend directory:

```bash
npm run dev
```

In the frontend directory:

```bash
npm run dev
```

The application will be available at:

- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## API Endpoints

### Authentication

- POST /api/auth/signup - Register a new user
- POST /api/auth/login - Login user
- GET /api/auth/me - Get current user info

## Project Structure

```
learning-platform/
├── frontend/           # Next.js frontend
│   ├── src/
│   │   ├── app/       # Pages and layouts
│   │   │   ├── components/# Reusable components
│   │   │   └── context/   # React context providers
│   │   └── public/        # Static files
│   └── backend/           # Express backend
│       ├── models/        # Mongoose models
│       ├── routes/        # API routes
│       └── middleware/    # Custom middleware
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
