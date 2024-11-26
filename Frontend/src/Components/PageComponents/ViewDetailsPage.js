import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Typography, Box, Button, Link } from "@mui/material";

function ViewDetailsPage() {
  const location = useLocation();
  const { post } = location.state;

  return (
    <Container
      sx={{
        backgroundColor: "#664a67",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      {post ? (
        <Container sx={{ marginTop: "30px", color: "white" }}>
          <Typography variant="h4">{post.title}</Typography>
          <Typography variant="body1" sx={{ marginTop: "20px" }}>
            {post.body}
          </Typography>
        </Container>
      ) : (
        <Typography variant="body1">No post details available.</Typography>
      )}

      <Button
        variant="contained"
        style={{
          marginTop: "30px",
          marginLeft: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link href="https://posts-show.vercel.app/" style={{ color: "white" }}>
          Go Back
        </Link>
      </Button>
    </Container>
  );
}

export default ViewDetailsPage;
