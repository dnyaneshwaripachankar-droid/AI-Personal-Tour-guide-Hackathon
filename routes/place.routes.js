import express from "express";
import {
  getAllPlaces,
  getPlacesByState,
  getPlacesByCategory
} from "../controllers/place.controller.js";

const router = express.Router();

router.get("/", getAllPlaces);
router.get("/state/:state", getPlacesByState);
router.get("/category/:category", getPlacesByCategory);

export default router;
