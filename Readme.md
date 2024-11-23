# Home Component with Delete Functionality

This project is a React component that fetches posts from an API, displays them in cards, and allows users to delete individual posts. The `Home` component uses Material-UI for UI styling and Axios for making HTTP requests.

---

## Features
1. **Fetch and Display Posts**: Fetches a list of posts from a backend API and displays them using Material-UI cards.
2. **Delete Functionality**: Allows the user to delete individual posts. The deleted post is removed both from the backend and the UI.
3. **Error Handling**: Displays error messages if the API request fails.
4. **Loading Indicator**: Shows a loading spinner while fetching data.

---


## Setup Instructions

### Prerequisites
- **Node.js** installed on your system.
- A running backend server that serves the posts API.

### Backend API Requirements
- **GET /Home**: Returns an object with `posts` as an array of post objects. Each post must have an `id`, `title`, and `body`.
- **DELETE /Home/:id**: Deletes a post with the specified `id`.

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

---

## Usage
1. **Start the Backend**:
   Ensure your backend is running at `http://localhost:5001` and has the required API endpoints.

2. **Fetch Posts**:
   - The component fetches posts from `http://localhost:5001/Home` on load.
   - Displays each post in a Material-UI card.

3. **Delete a Post**:
   - Click the **Delete** button on a card to remove the corresponding post.
   - The post is deleted both from the backend and the UI.

---

## Code Overview

### Home Component
- **State Variables**:
  - `posts`: Stores the list of posts.
  - `error`: Stores error messages.
  - `loading`: Indicates whether the data is being loaded.

- **Key Functions**:
  1. **`fetchPosts`**:
     Fetches posts from the backend API and populates the `posts` state.
  2. **`deleteCard`**:
     Deletes a specific post by its `id` and updates the UI.

- **Render Logic**:
  - Shows a loading spinner if `loading` is `true`.
  - Displays an error message if `error` is set.
  - Displays posts in cards if `loading` is `false` and there are no errors.

### DeleteCard Component
- A simple reusable button component for deleting posts. It receives a `deleteCard` function as a prop.

---

## Technologies Used
- **React**: Frontend framework.
- **Material-UI**: UI component library.
- **Axios**: For making HTTP requests.
