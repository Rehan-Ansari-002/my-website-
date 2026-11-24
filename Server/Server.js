
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:5174"
}));

app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.get("/", (req, res) => {
  res.json({ message: "Rehan AI backend is running!" });
});

app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({
        error: "Please send a message."
      });
    }

    const response = await client.responses.create({
      model: "gpt-5.5",
      input: messages.slice(-20),
      instructions: "You are Rehan AI. Give clear and helpful answers."
    });

    res.json({
      reply: response.output_text
    });

  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      error: "AI response failed. Check backend terminal."
    });
  }
});

app.listen(5000, () => {
  console.log("Rehan AI running on port 5000");
});
