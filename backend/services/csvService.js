const fs = require("fs");
const csv = require("csv-parser");

const parseCSV = (filePath) => {
    return new Promise((resolve, reject) => {

        const records = [];

        fs.createReadStream(filePath)
            .pipe(csv())
            .on("data", (row) => {
                records.push(row);
            })
            .on("end", () => {
                resolve(records);
            })
            .on("error", (err) => {
                reject(err);
            });

    });
};

module.exports = {
    parseCSV
};