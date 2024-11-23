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

import DeleteCard from "../ElementComponents/DeleteCard";

function Home() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5001/Home");
        setPosts(response.data.posts);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const deleteCard = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/Home/${id}`);
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container>
      {error ? (
        <Typography color="error" variant="body1">
          {error}
        </Typography>
      ) : loading ? (
        <CircularProgress />
      ) : (
        <Container>
          {posts.map((post, index) => (
            <Card key={index} sx={{ minWidth: 275, margin: "20px" }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {post.title}
                </Typography>

                <Typography variant="body2">{post.body}</Typography>
              </CardContent>
              <CardActions>
                <DeleteCard deleteCard={() => deleteCard(index)} />
              </CardActions>
            </Card>
          ))}
        </Container>
      )}
    </Container>
  );
}

export default Home;
