import React from "react";
import { Modal, Box, Container, Typography } from "@mui/material";

function ViewDetailsModal({ open, post, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        {post && (
          <Container>
            <Typography variant="h6">{post.title}</Typography>
            <Typography variant="body1">{post.body}</Typography>
          </Container>
        )}
      </Box>
    </Modal>
  );
}

export default ViewDetailsModal;
