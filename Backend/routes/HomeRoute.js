import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/`
    );
    res.json({
      posts: response.data,
    });
  } catch (error) {
    console.error(error);
  }
});

export default router;
