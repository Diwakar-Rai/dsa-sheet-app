import express from "express";
import { getTopics } from "../controllers/topic.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", authMiddleware, getTopics);

export default router;
