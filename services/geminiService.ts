import { GoogleGenAI, Type } from "@google/genai";
import { AiAssistantResponse } from '../types';

const getAiClient = () => {
  // In a real scenario, this would use the API key from environment variables
  // Since we cannot ask the user for input in code, we assume process.env.API_KEY is available.
  // If strict environment is not set up, this might throw, so we wrap usage in try/catch in components.
  return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
};

export const analyzeCaseDescription = async (description: string): Promise<AiAssistantResponse> => {
  const ai = getAiClient();

  const prompt = `
    You are a compassionate legal intake assistant for a Disability Law firm. 
    Analyze the following user situation and categorize it into one of our practice areas: 
    "Employment Discrimination", "Education Rights", "Housing Justice", or "Social Security".
    Also provide a one-sentence validation or helpful tip that is trauma-informed (calm, reassuring).
    
    User Situation: "${description}"
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            suggestedPracticeArea: { type: Type.STRING },
            helpfulTip: { type: Type.STRING },
          },
          required: ["suggestedPracticeArea", "helpfulTip"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as AiAssistantResponse;
  } catch (error) {
    console.error("AI Analysis Failed:", error);
    return {
      suggestedPracticeArea: "General Inquiry",
      helpfulTip: "Thank you for sharing. We will review your situation carefully."
    };
  }
};
