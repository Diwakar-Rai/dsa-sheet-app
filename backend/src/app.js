import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import topicRoutes from "./routes/topic.routes.js";
import progressRoutes from "./routes/progress.routes.js";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API Running",
  });
});
app.use("/api/auth", authRoutes);

app.use("/api/topics", topicRoutes);
app.use("/api/progress", progressRoutes);

export default app;
