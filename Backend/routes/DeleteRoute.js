import express from "express";

const router = express.Router();

router.delete("/", (req, res) => {
  try {
    const { id } = req.query;
    res.json({ message: `Post with id ${id} deleted successfully` });
  } catch (error) {
    res.json(error.message);
  }
});

export default router;
