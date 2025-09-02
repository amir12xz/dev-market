const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: path.join(__dirname, '..', 'public', 'coursepic'),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  }
});

module.exports = multer({
  storage,
  limits: { fileSize: 1 * 1024 * 1024 } 
});
