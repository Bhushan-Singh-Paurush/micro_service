import multer from "multer";
import crypto from "crypto";
import path from "path";

function getRendamString() {
  return crypto.randomBytes(16).toString("hex");
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/temp");
  },
  filename: (req, file, cb) => {
    const fileName = getRendamString() + path.extname(file.originalname);
    cb(null, fileName);
  },
});

export default multer = multer({ storage });
