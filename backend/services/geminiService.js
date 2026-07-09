async function processBatch(records) {

    const processed = records.map((row, index) => {

        return {
            id: index + 1,
            name: row.name || row.Name || "",
            email: row.email || row.Email || "",
            phone: row.phone || row.Phone || "",
            company: row.company || row.Company || "",
            status: "Imported",
            source: "AI Demo",
            confidence: "98%",
            remarks: "Validated Successfully"
        };

    });

    await new Promise(resolve => setTimeout(resolve, 1500));

    return processed;
}

module.exports = {
    processBatch,
};