import { z } from 'zod'

const vocalToneAnalysis = z.object({
  timbre: z
    .string()
    .describe(
      "The unique quality or 'tone color' of a voice that distinguishes it from all others, much like a vocal fingerprint."
    ),
  texture: z
    .string()
    .describe(
      'Voice texture refers to the unique, descriptive qualities of their voice beyond just pitch or volume.'
    ),
  vocalWeight: z
    .string()
    .describe(
      "a perceived quality of a voice that describes its 'heaviness' or 'lightness'"
    ),
})

const improvementTips = z
  .array(
    z.object({
      issueName: z.string().describe('The name/term for the issue in singing.'),
      fix: z
        .string()
        .describe('Suggested fix to improve/get rid of this issue.'),
    })
  )
  .describe(
    'Tips provided to the user detailing issues and their respective fixes.'
  )

const suggestedExercises = z.array(
  z.object({
    exerciseName: z.string().describe('The name/term for the exercise.'),
    description: z
      .string()
      .describe('The description detailing how the exercise is done.'),
  })
)

const analyzedVoiceResponseSchema = z.object({
  vocalToneAnalysis: vocalToneAnalysis,
  improvementTips: improvementTips,
  suggestedExercises: suggestedExercises,
})

export const analyzedVoiceResponseJsonSchema = z.toJSONSchema(
  analyzedVoiceResponseSchema
)
