import { Request, Response } from 'express'
import { analyzeVoiceService } from '../services/analyze'

export async function analyzeVoice(req: Request, res: Response) {
  try {
    const analyzedVoice = await analyzeVoiceService(req)
    res.status(200).json(analyzedVoice)
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}
