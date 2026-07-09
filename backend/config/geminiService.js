const { GoogleGenerativeAI } = require("@google/generative-ai");
const prompt = require("../utils/prompt");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash"
});

async function processBatch(records) {

    const finalPrompt = `

${prompt}

CSV Records

${JSON.stringify(records)}

`;

    try {

        const result = await model.generateContent(finalPrompt);

        const response = result.response.text();

        const cleaned = response
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        return JSON.parse(cleaned);

    } catch (err) {

        console.log(err);

        throw new Error("Gemini Parsing Failed");

    }

}

module.exports = {
    processBatch
};