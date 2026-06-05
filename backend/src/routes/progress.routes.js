import express from "express";

import authMiddleware from "../middleware/auth.middleware.js";

import {
  getProgress,
  toggleProblem,
} from "../controllers/progress.controller.js";

const router = express.Router();

router.get("/", authMiddleware, getProgress);

router.post("/toggle", authMiddleware, toggleProblem);

export default router;
