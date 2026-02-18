# Job Application Tracker

This is a Next.js application designed to help users track their job applications. It provides a Kanban board interface to visualize and manage the application process from "Applied" to "Hired" or "Rejected".

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Authentication:** [Better Auth](https://www.npmjs.com/package/better-auth)
*   **Database:** [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [Radix UI](https://www.radix-ui.com/)

## Features

*   User authentication (Sign up and Sign in)
*   Kanban board to track job applications
*   Create, edit, and delete job applications
*   Drag and drop functionality to move applications between columns
*   Responsive design for use on different devices

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js and npm (or yarn/pnpm/bun)
*   MongoDB instance (local or cloud)

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username/job_application_tracker.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Set up your environment variables. You'll need to create a `.env.local` file in the root of the project and add your MongoDB connection string and other necessary variables.
    ```
    MONGODB_URI=your_mongodb_connection_string
    ```
4.  Run the development server
    ```sh
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

*   `app/`: Contains the core application logic, including pages and API routes.
*   `components/`: Contains the reusable React components.
*   `lib/`: Contains the database models, authentication logic, and other utility functions.
<<<<<<< HEAD
*   `public/`: Contains the static assets like images and fonts.
=======
*   `public/`: Contains the static assets like images and fonts.
>>>>>>> aa8bdb0 (implementing Create job Applications)
