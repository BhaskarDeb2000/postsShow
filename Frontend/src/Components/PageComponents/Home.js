import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CircularProgress,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import DeleteModal from "../ElementComponents/DeleteModal";

function Home() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const navigate = useNavigate();

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

  const handleViewDetails = (post) => {
    navigate(`/details`, { state: { post } });
  };

  return (
    <Box
      sx={{
        backgroundColor: "#332244",
        minHeight: "100vh",
        color: "white",
        paddingBottom: "50px",
      }}
    >
      <Typography
        variant="h3"
        align="center"
        sx={{
          paddingTop: "40px",
          paddingBottom: "20px",
          fontWeight: "bold",
          color: "#ffccbc",
        }}
      >
        Welcome to the Show Card Hobby Project
      </Typography>
      <Container sx={{ padding: "20px" }}>
        {error ? (
          <Typography color="error" variant="body1" align="center">
            {error}
          </Typography>
        ) : loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "50vh",
            }}
          >
            <CircularProgress size={80} sx={{ color: "#ffccbc" }} />
          </Box>
        ) : (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
              marginTop: "30px",
            }}
          >
            {posts.map((post) => (
              <Card
                key={post.id}
                sx={{
                  backgroundColor: "#443355",
                  color: "white",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                  borderRadius: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      marginBottom: "15px",
                      fontWeight: "bold",
                      color: "#ffccbc",
                    }}
                  >
                    {post.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    textAlign="justify"
                    sx={{ marginBottom: "20px", lineHeight: "1.6" }}
                  >
                    {post.body}
                  </Typography>
                  <CardActions sx={{ justifyContent: "space-between" }}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#ff7043",
                        color: "white",
                        textTransform: "none",
                        "&:hover": { backgroundColor: "#e64a19" },
                      }}
                      onClick={() => handleViewDetails(post)}
                    >
                      View Details
                    </Button>

                    <Button
                      variant="outlined"
                      sx={{
                        borderColor: "#ffccbc",
                        color: "#ffccbc",
                        textTransform: "none",
                        "&:hover": {
                          backgroundColor: "#ffccbc",
                          color: "#332244",
                        },
                      }}
                      onClick={() => openDeleteModal(post)}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            ))}
          </Box>
        )}
      </Container>

      <DeleteModal
        open={deleteModalOpen}
        post={selectedPost}
        onClose={closeDeleteModal}
        onDelete={handleDelete}
      />
    </Box>
  );
}

export default Home;
