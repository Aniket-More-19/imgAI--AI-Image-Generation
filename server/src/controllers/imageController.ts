import { Request, Response } from "express";
import { getAllImages, useDalleApi } from "../services/imageService";

export const fetchImages = async (req: Request, res: Response) => {
  try {
    const images = await getAllImages();
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ error: "Could not fetch images!" });
  }
};

export const generateImage = async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    const result = useDalleApi();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to generate image!" });
  }
};
