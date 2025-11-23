import { Router } from 'express'
import { analyzeVoice } from '../controllers/analyze'

const router = Router()

router.post('/analyze', analyzeVoice)

export default router
