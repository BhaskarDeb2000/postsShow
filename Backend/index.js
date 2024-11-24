import express from "express";
import cors from "cors";

import HomeRoute from "./routes/HomeRoute.js";
import DescriptionRoute from "./routes/DescriptionRoute.js";
import DeleteRoute from "./routes/DeleteRoute.js";

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());

app.use("/articles", HomeRoute);
app.use("/articles/delete", DeleteRoute);
app.use("/description", DescriptionRoute);

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}/`);
});
