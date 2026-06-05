import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import topicRoutes from "./routes/topic.routes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API Running",
  });
});
app.use("/api/auth", authRoutes);

app.use("/api/topics", topicRoutes);
export default app;
