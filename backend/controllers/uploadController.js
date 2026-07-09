const fs = require("fs");

const { parseCSV } = require("../services/csvService");
const { processBatch } = require("../services/geminiService");

const BATCH_SIZE = 5;

const uploadCSV = async (req, res) => {

    try {

        console.log("========== NEW REQUEST ==========");

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "CSV file is required"
            });
        }

        console.log("1. File Uploaded Successfully");
        console.log(req.file);

        const filePath = req.file.path;

        console.log("2. Reading CSV...");

        const records = await parseCSV(filePath);

        console.log("3. CSV Parsed Successfully");
        console.log("Total Records :", records.length);

        let importedRecords = [];
        let skipped = 0;

        for (let i = 0; i < records.length; i += BATCH_SIZE) {

            const batch = records.slice(i, i + BATCH_SIZE);

            console.log(`4. Sending Batch ${i / BATCH_SIZE + 1} to Gemini...`);

            const aiResult = await processBatch(batch);

            console.log("5. Gemini Response Received");
            console.log(aiResult);

            if (Array.isArray(aiResult)) {

                importedRecords.push(...aiResult);

                skipped += batch.length - aiResult.length;

            }

        }

        console.log("6. Deleting Uploaded File");

        fs.unlinkSync(filePath);

        console.log("7. Returning Response");

        return res.status(200).json({

            success: true,

            totalRows: records.length,

            totalImported: importedRecords.length,

            totalSkipped: skipped,

            data: importedRecords

        });

    } catch (error) {

        console.error("========== BACKEND ERROR ==========");
        console.error(error);
        console.error(error.stack);

        return res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

module.exports = {
    uploadCSV
};