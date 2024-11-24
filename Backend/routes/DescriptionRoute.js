import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/", async (req, res) => {
  const id = req.query.id;

  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    res.json({
      title: response.data.title,
      body: response.data.body,
    });
  } catch (error) {
    console.error(error);
    res.send(error.message);
  }
});

export default router;
