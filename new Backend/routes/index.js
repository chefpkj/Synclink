import express from "express";
import authRoutes from "./authRoutes.js";
import notesRoutes from "./notesRoutes.js";

const router = express.Router();


router.use(authRoutes);
router.use(notesRoutes);

export default router;