import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateSunoPrompt = async (baseIdea: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an expert music producer and prompt engineer for AI music generation tools like Suno AI. 
      Create a highly detailed, "V5 level" music generation prompt based on this user idea: "${baseIdea}".
      
      The output must be a single string containing style keywords, instrument details, vocal characteristics, and atmospheric descriptors. 
      Do not include "Here is your prompt" prefix. Just the raw prompt text suitable for copying into Suno.
      
      Make it resemble this structure: "Genre, specific vibe, bpm, instruments, vocal style, atmospheric details".`,
      config: {
        thinkingConfig: { thinkingBudget: 0 }, // Disable thinking for faster response on simple tasks
        temperature: 0.8,
      }
    });

    return response.text || "Não foi possível gerar o prompt. Tente novamente.";
  } catch (error) {
    console.error("Gemini Error:", error);
    throw new Error("Falha ao conectar com o oráculo criativo.");
  }
};