import express from "express";
import cors from "cors";

import HomeRoute from "./routes/HomeRoute.js";

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());

app.use("/Home", HomeRoute);

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}/`);
});
