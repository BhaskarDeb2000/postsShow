# Show Card Hobby Project :tada:

This is a full-stack hobby project that demonstrates the use of React for the frontend and Express.js for the backend. The project enables users to view and delete articles, with a clean, responsive user interface built using Material-UI.

[Live Site](https://posts-show.vercel.app/)

---

## Features

- **View Articles**: Users can browse articles displayed as cards.
- **Delete Articles**: Articles can be deleted through a modal confirmation.
- **Responsive Design**: The application is styled using Material-UI for responsiveness and a clean look.
- **API Integration**: The app fetches and manages data from a backend server hosted on Vercel.

---

## Project Structure

### Frontend

The frontend is built with React, using Material-UI for styling and Axios for HTTP requests.

#### Key Components

1. **`App.js`**:
   - Entry point of the React application.
   - Configures the routes using `react-router-dom`.

2. **`Home.js`**:
   - Main page displaying articles fetched from the backend.
   - Contains functionality to:
     - Display articles in cards.
     - Show modals for viewing details and confirming deletions.

3. **Element Components**:
   - **`ViewDetailsModal.js`**: Displays the detailed view of an article in a modal.
   - **`DeleteModal.js`**: Confirms deletion of an article.

---

### Backend

The backend is built with Express.js and hosted on Vercel.

#### Key Files

1. **`index.js`**:
   - Configures routes for fetching, deleting, and describing articles.
   - Sets up Express with middleware for JSON parsing and CORS.

2. **Routes**:
   - **`HomeRoute.js`**: Handles requests for fetching all articles.
   - **`DescriptionRoute.js`**: Handles requests for fetching article details.
   - **`DeleteRoute.js`**: Handles deletion requests.

3. **`vercel.json`**:
   - Configures Vercel for deploying the backend API.

---

## Technologies Used

- **Frontend**: React, Material-UI, Axios
- **Backend**: Express.js, Vercel
- **Routing**: React Router
- **Deployment**: Vercel

---
