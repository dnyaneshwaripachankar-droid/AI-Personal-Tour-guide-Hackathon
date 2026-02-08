import express from "express";
import { createUser, getUserProfile } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/create", createUser);
router.get("/:userId", getUserProfile);

export default router;
