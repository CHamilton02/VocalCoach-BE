"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzedVoiceResponseJsonSchema = void 0;
const zod_1 = require("zod");
const vocalToneAnalysis = zod_1.z.object({
    timbre: zod_1.z
        .string()
        .describe("The unique quality or 'tone color' of a voice that distinguishes it from all others, much like a vocal fingerprint."),
    texture: zod_1.z
        .string()
        .describe('Voice texture refers to the unique, descriptive qualities of their voice beyond just pitch or volume.'),
    vocalWeight: zod_1.z
        .string()
        .describe("a perceived quality of a voice that describes its 'heaviness' or 'lightness'"),
});
const improvementTips = zod_1.z
    .array(zod_1.z.object({
    issueName: zod_1.z.string().describe('The name/term for the issue in singing.'),
    fix: zod_1.z
        .string()
        .describe('Suggested fix to improve/get rid of this issue.'),
}))
    .describe('Tips provided to the user detailing issues and their respective fixes.');
const suggestedExercises = zod_1.z.array(zod_1.z.object({
    exerciseName: zod_1.z.string().describe('The name/term for the exercise.'),
    description: zod_1.z
        .string()
        .describe('The description detailing how the exercise is done.'),
}));
const analyzedVoiceResponseSchema = zod_1.z.object({
    vocalToneAnalysis: vocalToneAnalysis,
    improvementTips: improvementTips,
    suggestedExercises: suggestedExercises,
});
exports.analyzedVoiceResponseJsonSchema = zod_1.z.toJSONSchema(analyzedVoiceResponseSchema);
