import OpenAI from 'openai';
import { check } from '@solopass/sdk';
import dotenv from 'dotenv';
dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const address = process.argv[2];

(async () => {
  const { result } = await check(address);
  if (result) {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: "What's your status update for today?" }],
      model: "gpt-4"
    });
    console.log("🤖 AI says:", completion.choices[0].message.content);
  } else {
    console.log("🚫 Access denied. No valid SoloPass.");
  }
})();

