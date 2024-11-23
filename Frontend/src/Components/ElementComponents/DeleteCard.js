import React from "react";
import { Button } from "@mui/material";

const DeleteCard = ({ deleteCard }) => {
  return (
    <Button size="small" variant="contained" onClick={deleteCard}>
      Delete
    </Button>
  );
};
export default DeleteCard;
