import { GoogleGenAI } from '@google/genai'
import { Request, Response } from 'express'
import 'dotenv/config'

const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })

export async function analyzeVoiceService(req: Request) {
  const response = await genAI.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: 'Explain how AI works in a few words',
  })
  return { response: response.text }
}
