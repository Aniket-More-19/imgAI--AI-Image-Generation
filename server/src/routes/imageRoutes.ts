import express from "express";
import { fetchImages, generateImage } from "../controllers/imageController";

const router = express.Router();

router.get("/", fetchImages);
router.post("/", generateImage);

export default router;
