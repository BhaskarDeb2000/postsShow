import React from "react";
import { Modal, Box, Typography, Button, Stack } from "@mui/material";

function DeleteModal({ open, post, onClose, onDelete }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "background.paper",
          boxShadow: 15,
          padding: 4,
          borderRadius: 2,
        }}
      >
        {post && (
          <>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              Are you sure you want to delete this post?
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 3 }}>
              {post.title}
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button variant="contained" color="error" onClick={onDelete}>
                Delete
              </Button>
              <Button variant="outlined" onClick={onClose}>
                Cancel
              </Button>
            </Stack>
          </>
        )}
      </Box>
    </Modal>
  );
}

export default DeleteModal;
