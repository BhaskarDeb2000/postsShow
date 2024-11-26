# Show Cards 📚✨

**Show Cards** is a fun project showcasing posts fetched from an external API. The application provides a modern and responsive interface where you can browse, view details, and delete posts effortlessly. It's built with a React frontend, Express.js backend, and styled using Material-UI. 🚀

---

## 🌍 Deployment

The project is deployed on **Vercel** and is live here:  
[**Show Cards App**](https://posts-show.vercel.app/) 🚀

---

## ✨ Features

- 📝 **Post Listing**: View all posts in a neat and organized grid layout.
- 🔍 **View Details**: Click a post to explore its full content on a separate page.
- 🗑️ **Delete Posts**: Remove posts with a confirmation modal.
- 🌐 **API Integration**: Data fetched dynamically from JSONPlaceholder.
- 📱 **Responsive Design**: Works seamlessly on all screen sizes.

---

## 🛠️ Technology Stack

### Frontend:
- ⚛️ **React**: For building a dynamic UI.
- 🧭 **React Router**: For smooth navigation.
- 🔗 **Axios**: For API requests.
- 🎨 **Material-UI**: For pre-styled, responsive components.

### Backend:
- 🌐 **Express.js**: For API routing and server logic.
- 🔗 **Axios**: To fetch data from external APIs.

### Deployment:
- 🌍 **Vercel**: Hosting for both the frontend and backend.

---

## 🗂️ Project Structure

### Frontend Components:
- `Home.js`: Displays posts in a grid layout with action buttons.
- `ViewDetailsPage.js`: A dedicated page to display post details.
- `App.js`: Entry point that defines application routes.

### Backend Routes:
- `HomeRoute.js`: Fetches all posts.
- `DescriptionRoute.js`: Fetches details for a specific post.
- `DeleteRoute.js`: Deletes a post by ID.

### Deployment Configuration:
- `vercel.json`: Configures deployment for Vercel.

---

## 🚀 Getting Started

### Prerequisites

- 🖥️ Node.js (v20+)
- 📦 npm or yarn (for package management)

## ⚙️ How It Works

1. **Homepage**:  
   - Posts are displayed in a grid format.  
   - Each post has two actions: "View Details" and "Delete".

2. **View Details**:  
   - Clicking "View Details" navigates to a new page displaying the full content of the post.

3. **Delete Post**:  
   - Clicking "Delete" opens a modal for confirmation. Once confirmed, the post is removed from the list.

---

## 📡 API Endpoints

- **Get All Posts**:  
  `GET /articles`  
  Fetches all posts.

- **Get Post Details**:  
  `GET /description?id=<post_id>`  
  Fetches details of a specific post.

- **Delete Post**:  
  `DELETE /articles/delete?id=<post_id>`  
  Deletes a post by its ID.

---


## 🙏 Acknowledgments

- ⚛️ [React](https://reactjs.org/)  
- 🌐 [Express.js](https://expressjs.com/)  
- 🔗 [Axios](https://axios-http.com/)  
- 🎨 [Material-UI](https://mui.com/)  
- 🌍 [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)  
- 🚀 [Vercel](https://vercel.com/) for deployment.  
