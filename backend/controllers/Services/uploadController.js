const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    const extension = file.mimetype.split("/")[1];
    const filename = `${req.user._id}_${Date.now()}.${extension}`;
    cb(null, filename);
  },
});

exports.upload = multer({ storage: storage });
