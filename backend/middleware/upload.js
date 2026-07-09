const multer = require("multer");
const path = require("path");
const fs = require("fs");

const uploadDir = path.join(__dirname, "../uploads");

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },

    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {

    if (
        file.mimetype === "text/csv" ||
        file.originalname.endsWith(".csv")
    ) {
        cb(null, true);
    } else {
        cb(new Error("Only CSV files are allowed"), false);
    }

};

module.exports = multer({
    storage,
    fileFilter
});