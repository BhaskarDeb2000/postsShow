import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Container, Typography, Button, Link } from "@mui/material";

function ViewDetailsPage() {
  const location = useLocation();
  const { post } = location.state;

  return (
    <Box
      sx={{
        backgroundColor: "#332244",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          maxWidth: "sm",
          textAlign: "center",
        }}
      >
        {post ? (
          <div>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              {post.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop: "20px",
                fontSize: "1.2rem",
                lineHeight: "1.8",
                textAlign: "justify",
              }}
            >
              {post.body}
            </Typography>
          </div>
        ) : (
          <Typography
            variant="body1"
            sx={{
              marginTop: "20px",
              fontSize: "1.2rem",
              fontStyle: "italic",
              color: "#ddd",
            }}
          >
            No post details available.
          </Typography>
        )}
        <Button
          variant="contained"
          sx={{
            marginTop: "30px",
            padding: "10px 20px",
            backgroundColor: "#ff7043",
            "&:hover": {
              backgroundColor: "#e64a19",
            },
            textTransform: "none",
          }}
        >
          <Link
            href="https://posts-show.vercel.app/"
            underline="none"
            sx={{
              color: "white",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            Go Back
          </Link>
        </Button>
      </Container>
    </Box>
  );
}

export default ViewDetailsPage;
