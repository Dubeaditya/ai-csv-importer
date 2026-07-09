const express = require("express");

const router = express.Router();

const upload = require("../middleware/upload");

const { uploadCSV } = require("../controllers/uploadController");

router.get("/", (req, res) => {

    res.json({

        success: true,

        message: "Upload API Working"

    });

});

router.post(

    "/",

    upload.single("csv"),

    uploadCSV

);

module.exports = router;