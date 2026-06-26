import express from "express";
import { generatePlan } from "../controllers/aiController.js";

const router = express.Router();

router.post("/generate-plan", generatePlan);

export default router;