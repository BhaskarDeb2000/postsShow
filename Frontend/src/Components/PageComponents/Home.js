import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CircularProgress,
  CardActions,
  Button,
} from "@mui/material";
import ViewDetailsModal from "../ElementComponents/ViewDetalisModal";
import DeleteModal from "../ElementComponents/DeleteModal";

function Home() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://postsshow-backend.vercel.app/articles"
        );
        setPosts(response.data.posts);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const openViewModal = (post) => {
    setSelectedPost(post);
    setViewModalOpen(true);
  };

  const closeViewModal = () => {
    setViewModalOpen(false);
    setSelectedPost(null);
  };

  const openDeleteModal = (post) => {
    setSelectedPost(post);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setSelectedPost(null);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://postsshow-backend.vercel.app/articles/delete?id=${selectedPost.id}`
      );
      setPosts((prevPosts) =>
        prevPosts.filter((post) => post.id !== selectedPost.id)
      );
      closeDeleteModal();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#664a67",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h3" color="#eeeee4" align="center" paddingTop="50px">
        Welcome to the show Card Hobby Project
      </Typography>
      <Container style={{ padding: "50px" }}>
        {error ? (
          <Typography color="error" variant="body1">
            {error}
          </Typography>
        ) : loading ? (
          <CircularProgress />
        ) : (
          <Container>
            {posts.map((post) => (
              <Card
                key={post.id}
                sx={{
                  minWidth: 275,
                  margin: "20px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ marginBottom: "20px" }}
                  >
                    {post.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    textAlign="left"
                    sx={{ marginBottom: "20px" }}
                  >
                    {post.body}
                  </Typography>
                  <CardActions sx={{ padding: 0 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => openViewModal(post)}
                    >
                      View Details
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => openDeleteModal(post)}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            ))}
          </Container>
        )}

        <ViewDetailsModal
          open={viewModalOpen}
          post={selectedPost}
          onClose={closeViewModal}
        />

        <DeleteModal
          open={deleteModalOpen}
          post={selectedPost}
          onClose={closeDeleteModal}
          onDelete={handleDelete}
        />
      </Container>
    </div>
  );
}

export default Home;
