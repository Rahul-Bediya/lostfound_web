// // const multer = require('multer');
// // const path = require('path');

// // const storage = multer.diskStorage({
// //   destination: function (req, file, cb) {
// //     cb(null, 'uploads/');
// //   },
// //   filename: function (req, file, cb) {
// //     cb(null, Date.now() + path.extname(file.originalname)); // Appending extension
// //   }
// // });

// // const upload = multer({
// //   storage: storage,
// //   limits: { fileSize: 1000000 }, // Limit file size to 1MB
// //   fileFilter: function (req, file, cb) {
// //     const fileTypes = /jpeg|jpg|png/;
// //     const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
// //     const mimeType = fileTypes.test(file.mimetype);

// //     if (mimeType && extname) {
// //       return cb(null, true);
// //     } else {
// //       cb('Error: Images Only!');
// //     }
// //   }
// // });

// // module.exports = upload;


// const multer = require('multer');
// const path = require('path');

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/');
//     },
//     filename: (req, file, cb) => {
//         cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
//     },
// });

// const upload = multer({
//     storage: storage,
//     limits: { fileSize: 1000000 }, // Limit file size to 1MB
//     fileFilter: (req, file, cb) => {
//         const filetypes = /jpeg|jpg|png|gif/;
//         const mimetype = filetypes.test(file.mimetype);
//         const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

//         if (mimetype && extname) {
//             return cb(null, true);
//         } else {
//             cb(new Error('Only images are allowed'));
//         }
//     },
// });

// module.exports = upload;

// const multer = require('multer');

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './backend/uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now() + '.jpg'); // Adjust filename as needed
//   }
// });

// const upload = multer({ storage: storage });

// module.exports = upload;


// config/multerConfig.js or middleware/upload.js
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, '../uploads');
    // Ensure uploads directory exists
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, `image-${Date.now()}${path.extname(file.originalname)}`);
  }
});

const upload = multer({ storage });

module.exports = upload;

