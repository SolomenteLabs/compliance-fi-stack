// SmartAgent logic
import OpenAI from "openai";
import { check } from "@solopass/sdk";

// Ensure you set OPENAI_API_KEY in your shell environment before running
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

/**
 * Run a GPT‑4o prompt only if the caller has a valid SoloPass.
 */
export async function run(address, prompt) {
  // 1. Token‑gate with SoloPass
  const pass = await check(address);
  if (!pass?.result) throw new Error("Access denied – no valid SoloPass token");

  // 2. Forward prompt to OpenAI (GPT‑4o‑mini for demo)
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are SoloPass SmartAgent – answer succinctly." },
      { role: "user", content: prompt }
    ]
  });

  return completion.choices[0].message.content.trim();
}
