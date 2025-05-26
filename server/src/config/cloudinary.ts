// export const CLOUDINARY_URL =
//   "563531735898125:eetrz8-UBoVE3-ezqnqHoOhNH8g@dtivdzutc";

import fs from "fs";
import dotenv from "dotenv";
const cloudinary = require("cloudinary").v2;

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

module.exports = cloudinary;

console.log("cloudinary setup done!");
