const { GoogleGenerativeAI } = require("@google/generative-ai");
const prompt = require("../utils/prompt");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

async function processBatch(records) {
  try {
    const finalPrompt = `
${prompt}

CSV Records:
${JSON.stringify(records, null, 2)}
`;

    console.log("Sending request to Gemini...");

    const result = await model.generateContent(finalPrompt);

    const text = result.response.text();

    console.log("Gemini Raw Response:");
    console.log(text);

    const cleaned = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleaned);

  } catch (err) {
    console.error("Gemini Error:");
    console.error(err);

    throw err;
  }
}

module.exports = {
  processBatch,
};