import { getDB } from "../utils/connectClient";

export const getAllImages = async () => {
  const db = await getDB();
  const collection = db.collection("images");
  const images = await collection.find().sort({ createdAt: -1 }).toArray();
  return images;
};

export const useDalleApi = async () => {
  const image = "image is generated here";
  return image;
};
